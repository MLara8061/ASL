# ASL - Acercando Soluciones Laborales

## Sitio Web Personalizado basado en AstroWind

### Configuración Completada ✅

#### 1. **Branding y Estilos**

- ✅ **Colores Corporativos**: Azul marino (#003366) como color primario, rojo vibrante (#EF4444) como secundario, gris claro (#E5E7EB) como acento
- ✅ **Tipografía**:
  - **Headings**: Montserrat (700/600)
  - **Body**: Inter (400-700)
  - Importadas desde Google Fonts
- ✅ **Archivo de estilos**: `src/components/CustomStyles.astro` actualizado

#### 2. **Configuración del Proyecto**

- ✅ **Navegación**: Menú simplificado (Inicio, Servicios, Cursos, Nosotros, Contacto)
- ✅ **CTA Principal**: "Agendar Diagnóstico" (Azul marino)
- ✅ **Footer**: Enlaces y redes sociales personalizadas para ASL
- ✅ **Metadata**: Título y descripción SEO optimizados para ASL

#### 3. **Landing Page Estructurada**

- ✅ **Hero Section**: Título y subtítulo corporativos, CTA dual
- ✅ **Servicios (Features2)**: 3 tarjetas principales
  - Consultoría Integral
  - Capacitación & IA
  - Asesoría Legal Laboral
- ✅ **Sección IA (Content)**: Capacitación con IA, transformación digital
- ✅ **Cursos (FAQs)**: 4 categorías interactivas
- ✅ **Leadership (Testimonials)**: Perfil de Lic. Perla Mercado
- ✅ **CTA Final (CallToAction)**: WhatsApp + Teléfono

#### 4. **Optimización**

- ✅ **Imágenes**: Automáticamente convertidas a WebP por Astro
- ✅ **Responsive**: Mobile-first design ya implementado
- ✅ **Build**: 36 páginas compiladas exitosamente
- ✅ **Performance**: Compresión de CSS (505 Bytes) y HTML (173.43 KB)

---

### Próximas Tareas Recomendadas

#### IMÁGENES (Prioridad Alta)

1. **Reemplazar placeholders**:
   - Hero: Foto de equipo corporativo/profesionales trabajando
   - IA Section: Collage de talleres presenciales con diplomas
   - Testimonial: Foto circular de Lic. Perla Mercado
   
2. **Añadir logos STPS y CONOCER**:
   - Sección IA tiene espacio para badges debajo del texto
   - Considerar usar componente personalizado

#### CONTENIDO Y PERSONALIZACIONES

1. **Números de contacto reales**:
   - Actualizar URLs de WhatsApp en `src/pages/index.astro` (línea 157)
   - Actualizar teléfono en `src/pages/index.astro` (línea 164)

2. **Información de servicios más detallada**:
   - Expandir descripciones en Features2
   - Considerar agregar pricing o CTA de consulta

3. **Badges/Certificaciones**:
   - Agregar logos de STPS y CONOCER en sección IA
   - Considerar agregar número de años de experiencia

#### TÉCNICO

1. **SEO y Analytics**:
   - Actualizar `src/config.yaml` con metadatos completos
   - Configurar Google Analytics en `astro.config.ts`
   - Crear sitemap (ya generado automáticamente)

2. **Componentes Adicionales** (Opcional):
   - Agregar blog de capacitaciones
   - Testimonials reales de clientes
   - Estadísticas/Números de impacto

---

### Estructura de Archivos Modificados

```astro
src/
├── components/
│   └── CustomStyles.astro ✏️ (Colores corporativos + Google Fonts)
├── pages/
│   └── index.astro ✏️ (Landing page principal)
├── navigation.ts ✏️ (Menú y footer)
└── config.yaml ✏️ (Metadata de sitio)

tailwind.config.js (Sin cambios - usa variables CSS)
```

---

### Comandos Útiles

**Desarrollar localmente**:

```bash
npm run dev
# Abre en http://localhost:3000
```

**Build producción**:

```bash
npm run build
# Genera carpeta `dist/` lista para deploy
```

**Preview del build**:

```bash
npm run preview
```

---

### Paleta de Colores Implementada

| Elemento | Hex | RGB |
| --- | --- | --- |
| Primary (Azul Marino) | #003366 | rgb(0 51 102) |
| Secondary (Rojo) | #EF4444 | rgb(239 68 68) |
| Accent (Gris Claro) | #E5E7EB | rgb(229 231 235) |

---

### Notas Finales

- Todas las fuentes están cargadas desde Google Fonts (sin instalación local necesaria)
- El sitio es completamente responsive (mobile-first)
- Las imágenes se optimizan automáticamente a WebP
- El color primario azul marino se usa automáticamente en botones CTAs y enlaces
- Las imágenes placeholder pueden ser reemplazadas en `src/assets/images/`

**Estado**: 🟢 Compilación exitosa | 📦 Listo para desarrollo de contenido

---

## Última actualización

24 de enero de 2026
