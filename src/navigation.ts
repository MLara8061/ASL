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
        { text: 'Consultoría Integral', href: '#servicios' },
        { text: 'Capacitación & IA', href: '#ia' },
        { text: 'Asesoría Legal Laboral', href: '#servicios' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Cursos Disponibles', href: '#cursos' },
        { text: 'Capacitación IA', href: '#ia' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Contáctanos', href: '#testimonial' },
        { text: 'Teléfono: 998 223 4097', href: 'tel:+529982234097' },
        { text: 'Email: info@acercandosoluciones.com', href: 'mailto:info@acercandosoluciones.com' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/AcercandoCapacitacion?locale=es_LA' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/acercandomx?igsh=YWdvZHp3YXJ0aG5p&utm_source=qr' },
  ],
  footNote: `
    © 2026 Acercando Soluciones Laborales. Todos los derechos reservados.
  `,
};
