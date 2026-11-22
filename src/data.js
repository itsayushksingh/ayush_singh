import {
  BookOpen,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  FileSpreadsheet,
  Landmark,
  ReceiptText,
  ShieldCheck,
  Table2,
} from 'lucide-react';

export const profile = {
  name: 'Ayush Singh',
  firstName: 'Ayush',
  role: 'Accounting Professional',
  email: 'ayushsingh@example.com',
  location: 'Jaunpur, Uttar Pradesh, India',
  intro:
    'I turn numbers into clarity. A B.Com graduate with hands-on experience across banking and global finance, focused on accurate reporting, clean books and steady growth.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const roles = [
  'Accounting Professional',
  'Finance Enthusiast',
  'Detail-Oriented Analyst',
];

export const stats = [
  { value: 1.5, suffix: '+', decimals: 1, label: 'Years of Experience' },
  { value: 2, suffix: '', decimals: 0, label: 'Internships Completed' },
  { value: 10, suffix: '+', decimals: 0, label: 'Core Skills' },
];

export const experiences = [
  {
    role: 'Accounting Executive',
    company: 'Full-Time Role',
    duration: 'Present',
    current: true,
    description:
      'Handling day-to-day accounting operations, maintaining accurate ledgers and supporting monthly financial reporting with a sharp eye for detail.',
    tags: ['Financial Reporting', 'Ledger Management', 'Reconciliation'],
    icon: Calculator,
  },
  {
    role: 'Accounting Intern',
    company: 'JPMorgan Chase',
    duration: '1 Year',
    current: false,
    description:
      'Supported finance and accounting operations in a global banking environment, working with spreadsheets, documentation and internal controls.',
    tags: ['Finance Operations', 'Advanced Excel', 'Internal Controls'],
    icon: Building2,
  },
  {
    role: 'Accounting Intern',
    company: 'Punjab National Bank (PNB)',
    duration: '7 Months',
    current: false,
    description:
      'Assisted the accounting team with reconciliation, vouchers and record management while learning the fundamentals of banking operations.',
    tags: ['Banking Operations', 'Reconciliation', 'Documentation'],
    icon: Landmark,
  },
];

export const skills = [
  { name: 'Financial Accounting', level: 92, icon: Calculator },
  { name: 'Advanced Excel', level: 90, icon: Table2 },
  { name: 'TallyPrime / Tally', level: 86, icon: FileSpreadsheet },
  { name: 'Bank Reconciliation', level: 88, icon: Landmark },
  { name: 'GST & Taxation', level: 80, icon: ReceiptText },
  { name: 'Financial Reporting', level: 85, icon: ChartNoAxesCombined },
];

export const services = [
  {
    number: '01',
    title: 'Financial Accounting',
    description:
      'Accurate bookkeeping, ledger maintenance and month-end closure that keeps your records clean and audit-ready.',
    icon: Calculator,
  },
  {
    number: '02',
    title: 'Reconciliation',
    description:
      'Bank and ledger reconciliation that catches discrepancies early and keeps every number in its right place.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Reporting & Analysis',
    description:
      'Clear, structured financial reports and spreadsheet analysis that make decision-making simpler.',
    icon: ChartNoAxesCombined,
  },
  {
    number: '04',
    title: 'Tax & Compliance',
    description:
      'GST computations, documentation and support with statutory requirements handled carefully and on time.',
    icon: BookOpen,
  },
];

export const education = {
  degree: 'Bachelor of Commerce (B.Com)',
  school: 'Purvanchal University',
  place: 'Jaunpur, Uttar Pradesh',
};
