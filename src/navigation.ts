import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/#servicios'),
    },
    {
      text: 'Cursos',
      href: getPermalink('/#cursos'),
    },
    {
      text: 'Nosotros',
      href: getPermalink('/about'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Agendar Diagnóstico',
      href: '#contacto',
      target: '_self',
      variant: 'primary' as const,
    },
  ],
};


export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Consultoría Integral', href: '#' },
        { text: 'Capacitación & IA', href: '#' },
        { text: 'Asesoría Legal Laboral', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Cursos', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Webinars', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Sobre Nosotros', href: '#' },
        { text: 'Equipo', href: '#' },
        { text: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Términos y Condiciones', href: getPermalink('/terms') },
        { text: 'Política de Privacidad', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/1234567890' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    © 2026 Acercando Soluciones Laborales (ASL). Todos los derechos reservados.
  `,
};
