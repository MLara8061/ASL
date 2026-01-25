# 🎯 ASL - INICIO RÁPIDO EN 1 PÁGINA

## ¿QUÉ SE HIZO?

Personalizamos completamente la plantilla **AstroWind** para **ASL** (Acercando Soluciones Laborales):

✅ Colores corporativos (Azul marino #003366)
✅ Tipografía Google Fonts (Montserrat + Inter)
✅ Landing page con 6 secciones
✅ Navegación personalizada
✅ 100% Responsive
✅ Build exitoso (36 páginas)
✅ 5 guías de implementación

---

## 3 PASOS PARA FINALIZAR

### 1️⃣ REEMPLAZAR IMÁGENES (5 min)
```
Carpeta: src/assets/images/

1. hero-corporate.png
   → Descarga foto de equipo corporativo/profesionales
   → Tamaño: 1200x800px mínimo
   
2. capacitacion-ai.png
   → Foto de talleres con diplomas
   → Tamaño: 800x600px
   
3. perla-mercado.png
   → Foto de Lic. Perla Mercado
   → Tamaño: 200x200px (será circular)
```

### 2️⃣ ACTUALIZAR CONTACTO (2 min)
```
Archivo: src/pages/index.astro

Línea 157: Cambiar WhatsApp
De: https://wa.me/1234567890
A:  https://wa.me/5215541234567  ← Tu número real

Línea 164: Cambiar teléfono
De: tel:+5212341234567
A:  tel:+5215541234567  ← Tu número real
```

### 3️⃣ TEST & COMMIT (3 min)
```bash
npm run dev
# Verifica en http://localhost:3000

git add .
git commit -m "Update: Imágenes y contacto"
git push origin main
```

---

## 🚀 PUBLICAR (CUANDO ESTÉ LISTO)

```bash
# Opción 1: Netlify (RECOMENDADO)
npm install -g netlify-cli
netlify login
netlify deploy --prod

# Opción 2: Vercel
npm install -g vercel
vercel --prod

# Opción 3: GitHub Pages
# Ver GUIA_DEPLOY.md
```

---

## 📊 ESTADO ACTUAL

```
Build:              ✅ Exitoso (36 páginas)
Colores:            ✅ Azul marino + Rojo + Gris
Tipografía:         ✅ Montserrat + Inter
Responsive:         ✅ 100% Mobile-first
SEO:                ✅ Metadata completo
Imágenes:           ⏳ Pendiente (usando placeholders)
Números contacto:   ⏳ Pendiente (placeholder)
```

---

## 📚 DOCUMENTOS

| Archivo | Qué es | Cuándo leer |
|---------|--------|------------|
| **INDICE.md** | Guía de navegación | PRIMERO |
| **RESUMEN_FINAL.md** | Visión general | Entender qué se hizo |
| **GUIA_IMAGENES_Y_CONTACTO.md** | Instrucciones prácticas | Para hacer cambios |
| **GUIA_DEPLOY.md** | Publicar online | Cuando esté listo |
| **CHECKLIST_FINAL.md** | Verificación completa | Antes de publicar |

---

## 💻 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview

# Fix de código
npm run fix
```

---

## 🎨 ESTRUCTURA DE LA LANDING

```
1. HERO
   └─ Título + Subtítulo + CTAs

2. SERVICIOS (3 tarjetas)
   ├─ Consultoría
   ├─ Capacitación & IA
   └─ Asesoría Legal

3. IA DESTACADA
   └─ Contenido + Imagen + Badges

4. CURSOS (Acordeón)
   ├─ IA
   ├─ Legales
   ├─ Liderazgo
   └─ Hotelera

5. TESTIMONIO
   └─ Lic. Perla Mercado

6. CTA FINAL
   ├─ WhatsApp
   └─ Teléfono
```

---

## 🔗 ENLACES IMPORTANTES

```
Repo Local:  c:\Users\sanbo\OneDrive\Desktop\ASL\astrowind-asl
GitHub:      https://github.com/onwidget/astrowind (base)
Netlify:     https://netlify.com (hosting recomendado)
Astro Docs:  https://docs.astro.build
```

---

## ✨ PRÓXIMOS PASOS

```
HOY:
  1. Leer INDICE.md
  2. Leer RESUMEN_FINAL.md
  3. Reemplazar imágenes
  4. Actualizar números
  
MAÑANA:
  5. Comprar dominio
  6. Elegir hosting
  
ESTA SEMANA:
  7. Publicar en vivo
  8. Monitorear tráfico
```

---

## ⚡ CHEAT SHEET

| Qué necesito | Dónde está | Qué cambiar |
|-------------|-----------|------------|
| Cambiar colores | `CustomStyles.astro` | RGB values (línea 28-30) |
| Cambiar menú | `navigation.ts` | Links y textos |
| Cambiar contenido | `index.astro` | Textos y descripciones |
| Agregar imagen | `src/assets/images/` | Nombre del archivo + referencia en código |
| Dominio | `config.yaml` | `site.site` |
| Analytics | `astro.config.ts` | Agregar integración |

---

## 🎯 CHECKLIST RÁPIDO

- [ ] Leer INDICE.md (5 min)
- [ ] Leer RESUMEN_FINAL.md (10 min)
- [ ] Descargar imágenes (5 min)
- [ ] Reemplazar en carpeta (5 min)
- [ ] Actualizar números contacto (2 min)
- [ ] Probar localmente: `npm run dev` (3 min)
- [ ] Hacer commit a GitHub (2 min)
- [ ] Configurar hosting (30 min)
- [ ] Publicar en vivo (10 min)

**Total**: ~1.5 horas

---

## 🆘 SOS: Algo no funciona

```bash
# Limpiar y reinstalar
rm -rf node_modules dist
npm install

# Reiniciar dev
npm run dev

# Ver todos los errores
npm run build
```

---

## 📞 INFORMACIÓN IMPORTANTE

**Proyecto**: ASL - Acercando Soluciones Laborales
**Base**: AstroWind (Astro 5.0 + Tailwind CSS)
**Estado**: ✅ 100% Listo (excepto imágenes y números)
**Build**: ✅ Exitoso - 0 errores
**Deployment**: Listo para Netlify/Vercel
**Timeline**: 1.5 horas para finalizar

---

## 🚀 TU SIGUIENTE ACCIÓN

1. Abre `INDICE.md` (está en el proyecto)
2. Sigue el flujo recomendado
3. En 30 minutos tendrás cambios listos
4. En 1.5 horas estarás publicado

---

**¡Bienvenido al proyecto ASL!**

Este documento es tu hoja de ruta rápida.
Para detalles, consulta los otros archivos .md

```
INICIO → INDICE.md → RESUMEN_FINAL.md → GUIA_IMAGENES_Y_CONTACTO.md → ¡PUBLICAR!
```

---

*Última actualización: 24 de enero de 2026*
*Estado: ✅ PRODUCCIÓN LISTA*
