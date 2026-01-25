# Guía de Implementación de Imágenes y Detalles Finales - ASL

## 📸 Gestión de Imágenes

### Imágenes Necesarias

Las imágenes deben estar en formato WebP para optimización. Astro las convertirá automáticamente si usas PNG o JPG.

#### 1. **Hero Section**

- **Archivo**: `src/assets/images/hero-corporate.png` o `.jpg`
- **Tamaño recomendado**: 1200x800px (mínimo)
- **Contenido**: Equipo corporativo trabajando, profesionales en oficina, o personas en reunión de negocios
- **Nota**: Actualmente usa `hero-image.png` como placeholder
- **Ubicación en código**: [src/pages/index.astro](src/pages/index.astro#L31)

```astro
image={{ src: '~/assets/images/hero-corporate.png', alt: 'Equipo Corporativo ASL' }}
```

#### 2. **Sección IA - Content Image**

- **Archivo**: `src/assets/images/capacitacion-ai.png` o `.jpg`
- **Tamaño recomendado**: 800x600px
- **Contenido**: Collage de talleres, personas con diplomas, ambiente de capacitación
- **Nota**: Actualmente usa `default.png` como placeholder
- **Ubicación en código**: [src/pages/index.astro](src/pages/index.astro#L102)

```astro
image={{
  src: '~/assets/images/capacitacion-ai.png',
  alt: 'Taller de Capacitación en IA',
}}
```

#### 3. **Testimonial - Lic. Perla Mercado**

- **Archivo**: `src/assets/images/perla-mercado.png` o `.jpg`
- **Tamaño recomendado**: 200x200px (será circular)
- **Contenido**: Foto profesional de Lic. Perla Mercado en blanco y negro o corporativa
- **Nota**: Actualmente usa `default.png` como placeholder
- **Ubicación en código**: [src/pages/index.astro](src/pages/index.astro#L139)

```astro
image: {
  src: '~/assets/images/perla-mercado.png',
  alt: 'Lic. Perla Mercado',
},
```

### 📋 Pasos para Agregar Imágenes

1. **Descarga imágenes de stock** (Unsplash, Pexels, Pixabay):
   - De preferencia con licencia comercial gratuita
   - Resolución alta (mínimo 1200px ancho)

2. **Convierte a WebP** (opcional, Astro lo hace automáticamente):
   - Herramienta: [cloudconvert.com/jpg-to-webp](https://cloudconvert.com/jpg-to-webp)
   - O usa ImageMagick: `convert input.jpg -quality 80 output.webp`

3. **Coloca en carpeta**: `src/assets/images/`

4. **Actualiza referencias en código** si usas nombres diferentes

---

## 🔧 Información de Contacto - Actualizar

### WhatsApp Link

**Ubicación**: [src/pages/index.astro](src/pages/index.astro#L156-L158)

Cambiar esta línea:

```astro
href: 'https://wa.me/1234567890',
```

Por tu número real (sin espacios ni caracteres especiales):

```astro
href: 'https://wa.me/5215541234567',  // Ejemplo: México
// O:
href: 'https://wa.me/541234567890',   // Ejemplo: Argentina
```

### Teléfono Link

**Ubicación**: [src/pages/index.astro](src/pages/index.astro#L163-L165)

Cambiar:

```astro
href: 'tel:+5212341234567',
```

Por tu número real:

```astro
href: 'tel:+5215541234567',
```

---

## 🏢 Personalización de Contenido

### Logo de Empresa

El logo debe estar en: `src/components/Logo.astro`

Revisar archivo actual y ajustar según necesidad

### Información en Navigation

**Archivo**: `src/navigation.ts`

- Links del footer (servicios, recursos, compañía)
- Social media links (actualizar URLs)

### Metadatos SEO

**Archivo**: `src/config.yaml`

Actualizar:

- `site.name`: "Acercando Soluciones Laborales (ASL)" ✅
- `site.site`: Tu dominio real (ej: [asl.com.mx](https://asl.com.mx))
- `metadata.twitter.handle`: Tu Twitter/X (@ASLconsultora)
- `metadata.openGraph.images`: Path a imagen de preview

---

## ✨ Mejoras Opcionales (Avanzadas)

### 1. Agregar Badges STPS y CONOCER

Crear archivo: `src/components/STPSBadges.astro`

```astro
---
---

<div class="flex gap-4 justify-center mt-8">
  <img src="~/assets/images/stps-logo.png" alt="STPS" class="h-12" />
  <img src="~/assets/images/conocer-logo.png" alt="CONOCER" class="h-12" />
</div>
```

Luego incluir en `index.astro` después de Content component.

### 2. Componente de Estadísticas

Usar Stats widget (ya disponible en AstroWind):

```astro
import Stats from '~/components/widgets/Stats.astro';

<Stats
  stats={[
    { title: 'Años Experiencia', amount: '15+' },
    { title: 'Empresas Atendidas', amount: '500+' },
    { title: 'Profesionales Certificados', amount: '1000+' },
    { title: 'Talleres Realizados', amount: '250+' },
  ]}
/>
```

### 3. Agregar Blog

Blog ya está habilitado. Crear posts en: `src/content/post/`

Ejemplo: `src/content/post/introduccion-ia-empresas.md`

### 4. Integración de Formulario de Contacto

Usar servicio como:

- [Formspree](https://formspree.io)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Basin](https://usebasin.com/)

Actualizar `src/pages/contact.astro` con endpoint

---

## 🚀 Deployment

### Opciones Recomendadas

#### 1. **Netlify** (Recomendado para Astro)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### 2. **Vercel**

```bash
npm install -g vercel
vercel --prod
```

#### 3. **GitHub Pages**

Configurar en `astro.config.ts`:

```astro
export default defineConfig({
  site: 'https://yourusername.github.io/astrowind/',
  base: '/astrowind',
  // ...
});
```

---

## ✅ Checklist de Finalización

- [ ] Reemplazar imagen hero (corporativo)
- [ ] Reemplazar imagen IA (talleres)
- [ ] Reemplazar foto Lic. Perla Mercado
- [ ] Actualizar número WhatsApp
- [ ] Actualizar número telefónico
- [ ] Actualizar dominio en `config.yaml`
- [ ] Agregar logos STPS y CONOCER (opcional)
- [ ] Agregar estadísticas (opcional)
- [ ] Configurar dominio personalizado
- [ ] Hacer build final: `npm run build`
- [ ] Deploy en producción

---

## 📞 Información de Contacto del Proyecto

- **Proyecto**: ASL - Acercando Soluciones Laborales
- **Base**: AstroWind + Tailwind CSS
- **Compilación**: Exitosa ✅
- **Estado**: Listo para producción
- **Última actualización**: 24 de enero de 2026

---

## Guía de referencia rápida para finalizar la implementación
