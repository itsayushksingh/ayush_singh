import { useState } from 'react';
import { Check, Download, LoaderCircle } from 'lucide-react';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Switch to a dedicated print layout: every reveal is forced to its final
// state in CSS, so no scrolling or animation waiting is needed.
function enterCaptureMode() {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;

  document.body.classList.add('pdf-capture');
  document.body.classList.add('pdf-mode');
  root.style.scrollBehavior = 'auto';

  return () => {
    root.style.scrollBehavior = previousBehavior;
    document.body.classList.remove('pdf-mode');
    document.body.classList.remove('pdf-capture');
  };
}

async function preparePrintLayout() {
  if (document.fonts?.ready) await document.fonts.ready;
  await wait(500); // allow the print stylesheet and fonts to settle

  const rect = (selector) => {
    const element = document.querySelector(selector);
    if (!element) return null;
    const box = element.getBoundingClientRect();
    return {
      top: box.top + window.scrollY,
      bottom: box.bottom + window.scrollY,
    };
  };

  const navbar = rect('.navbar');
  const hero = rect('.hero');
  const about = rect('#about');
  const experience = rect('#experience');
  const skills = rect('#skills');
  const services = rect('.services-section');
  const contact = rect('#contact');
  const footer = rect('.footer');

  // Group the small navbar with the hero and the footer with contact so no
  // section is awkwardly split across two pages.
  return [
    { top: navbar.top, bottom: hero.bottom },
    { top: about.top, bottom: about.bottom },
    { top: experience.top, bottom: experience.bottom },
    { top: skills.top, bottom: skills.bottom },
    { top: services.top, bottom: services.bottom },
    { top: contact.top, bottom: footer.bottom },
  ].filter((section) => section.bottom > section.top);
}

function renderToPdf(canvas, jsPDF, sections) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const sliceHeight = Math.floor((canvas.width * pageHeight) / pageWidth);

  const slice = document.createElement('canvas');
  const context = slice.getContext('2d');

  const scale = canvas.width / 820;
  const ranges = sections.length
    ? sections.map((section) => ({
        start: Math.max(0, Math.floor(section.top * scale)),
        end: Math.min(canvas.height, Math.ceil(section.bottom * scale)),
      }))
    : [{ start: 0, end: canvas.height }];

  let page = 0;
  for (const range of ranges) {
    for (let y = range.start; y < range.end; y += sliceHeight) {
      const height = Math.min(sliceHeight, range.end - y);
      if (height < 2) continue;

      // Every page is a full A4 canvas filled with white, including the last
      // partial slice, so the document never has dark or empty white bands.
      slice.width = canvas.width;
      slice.height = sliceHeight;
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, sliceHeight);
      context.drawImage(canvas, 0, y, canvas.width, height, 0, 0, canvas.width, height);

      if (page > 0) pdf.addPage();
      pdf.addImage(slice.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, pageWidth, pageHeight);
      page += 1;
    }
  }

  return pdf;
}

export default function DownloadPDF({ className = '', compact = false }) {
  const [status, setStatus] = useState('idle');

  const handleDownload = async () => {
    if (status === 'working') return;
    setStatus('working');

    const exitCaptureMode = enterCaptureMode();

    try {
      const [{ default: html2canvas }, jspdf] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);
      const jsPDF = jspdf.jsPDF || jspdf.default;

      const sections = await preparePrintLayout();

      const canvas = await html2canvas(document.body, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        logging: false,
        width: 820,
        height: document.documentElement.scrollHeight,
        windowWidth: 820,
        windowHeight: document.documentElement.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });

      const pdf = renderToPdf(canvas, jsPDF, sections);
      pdf.save('Ayush-Singh-Portfolio.pdf');
      setStatus('done');
      window.setTimeout(() => setStatus('idle'), 3500);
    } catch (error) {
      console.error('Could not generate the PDF:', error);
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 4000);
    } finally {
      exitCaptureMode();
    }
  };

  const labels = {
    idle: 'Download PDF',
    working: 'Generating…',
    done: 'Downloaded!',
    error: 'Try again',
  };
  const Icon = status === 'working' ? LoaderCircle : status === 'done' ? Check : Download;

  return (
    <button
      type="button"
      className={`${className} pdf-button ${status === 'working' ? 'is-working' : ''}`}
      onClick={handleDownload}
      disabled={status === 'working'}
      aria-label={compact ? 'Download portfolio as PDF' : undefined}
      title="Download the full portfolio as a PDF"
      data-pdf-button
    >
      <Icon size={compact ? 17 : 16} />
      {!compact && <span>{labels[status]}</span>}
    </button>
  );
}
