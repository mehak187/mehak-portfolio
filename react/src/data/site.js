export const profile = {
  name: 'Mehak Amir',
  initials: 'MA',
  role: 'Senior Full Stack Developer',
  email: 'mehakamir187@gmail.com',
  phone: '+92 325 4370049',
  whatsappNumber: '923254370049',
  whatsappMessage: "Hi Mehak, I saw your portfolio and I'd like to discuss a project.",
  linkedin: 'https://www.linkedin.com/in/mehakamir187',
}

export const whatsappLink = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
]

export const stats = [
  { value: 80, suffix: '+', label: 'Projects delivered' },
  { value: 500, suffix: '+', label: 'API endpoints built' },
  { value: 5, suffix: '', label: 'Years experience' },
]

export const techStack = [
  'Laravel', 'React', 'Next.js', 'Stripe Connect', 'WordPress', 'WooCommerce',
  'Livewire', 'Filament', 'MySQL', 'AWS S3', 'Laravel Reverb', 'Firebase', 'Twilio', 'Tailwind',
]

export const paymentSplit = {
  amount: '$1,200.00',
  rows: [
    { name: 'Service provider', value: '$1,020.00', width: '85%', color: '#ff5a36' },
    { name: 'Platform fee', value: '$120.00', width: '10%', color: '#f2f0ea' },
    { name: 'Sales rep', value: '$36.00', width: '3%', color: '#7c8cff' },
    { name: 'Charity partner', value: '$24.00', width: '2%', color: '#3ddc97' },
  ],
}

export const facts = [
  ['Based in', 'Sialkot, Pakistan'],
  ['Works with', 'Clients worldwide'],
  ['Experience', '5 years'],
  ['Education', 'BS Software Engineering'],
  ['Languages', 'English, Urdu'],
]

export const timeline = [
  {
    when: 'Aug 2022 to present',
    title: 'Senior Full Stack Laravel Developer',
    text: 'Fabulous Technology Solutions. Marketplaces, SaaS and payment systems for international clients. Mentoring junior developers.',
  },
  {
    when: 'Dec 2021 to Apr 2022',
    title: 'Front End Web Developer',
    text: 'WP Brigade. Figma and XD designs to responsive, pixel perfect pages and WordPress themes.',
  },
  {
    when: 'Aug 2021 to Nov 2021',
    title: 'Front End Web Developer',
    text: 'Trademor. Custom client websites, hosting, domains and SSL.',
  },
]
