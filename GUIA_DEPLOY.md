# 🚀 GUÍA DE DEPLOY - ASL

## Opciones de Hosting para Astro

### ⭐ OPCIÓN 1: NETLIFY (RECOMENDADO)

**Ventajas**:

- ✅ Gratis (hasta 100GB/mes)
- ✅ Deploy automático desde Git
- ✅ SSL gratuito
- ✅ Soporte para formularios
- ✅ Excelente para Astro

**Pasos**:

1. **Conectar repositorio**:

   ```bash
   # Sube el proyecto a GitHub
   git init
   git add .
   git commit -m "Initial commit ASL"
   git remote add origin https://github.com/tuusuario/astrowind-asl
   git push -u origin main
   ```

2. **Crear cuenta Netlify**:
   - Ve a [app.netlify.com](https://app.netlify.com)
   - Click en "Sign up" → GitHub
   - Autoriza acceso

3. **Deploy**:
   - Click "New site from Git"
   - Selecciona repositorio
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

4. **Resultado**:

   ```bash
   URL: https://[random-name].netlify.app
   ```

5. **Dominio personalizado** (opcional):
   - Dashboard → Site settings → Domain management
   - Agrega tu dominio
   - Apunta DNS

---

### 🔵 OPCIÓN 2: VERCEL

**Ventajas**:

- ✅ Velocidad extrema
- ✅ Gratuito
- ✅ Soporte nativo Astro
- ✅ Analytics incluido

**Pasos**:

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Deploy
vercel --prod

# 3. Seguir prompts del CLI
```

---

### 📦 OPCIÓN 3: GITHUB PAGES

**Ventajas**:

- ✅ 100% gratis
- ✅ Alojado en GitHub

**Pasos**:

1. **Actualizar `astro.config.ts`**:

   ```typescript
   export default defineConfig({
     site: 'https://tuusuario.github.io',
     base: '/astrowind-asl',
     // ... resto de config
   });
   ```

2. **Crear workflow GitHub Actions**:
   - `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Push a GitHub**:

   ```bash
   git push origin main
   ```

---

## 🔒 CONFIGURACIÓN DE DOMINIO

### Pasos generales para cualquier hosting

1. **Comprar dominio**:
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

2. **Obtener nameservers**:
   - Netlify: Verifica en Site settings
   - Vercel: Proporciona automáticamente
   - GitHub: Usa el tuyo + CNAME

3. **Apuntar DNS**:
   - En proveedor de dominio
   - Agregadirectly desde Netlify/Vercel

4. **Esperar propagación** (5-24 horas)

5. **Verificar**:

   ```bash
   nslookup tudominio.com
   ```

---

## 📋 CHECKLIST PRE-DEPLOY

Antes de publicar:

- [ ] Imágenes reemplazadas (hero, IA, testimonial)
- [ ] Números de contacto actualizados
  - [ ] WhatsApp
  - [ ] Teléfono
- [ ] Dominio comprado y apuntando
- [ ] `src/config.yaml` actualizado:
  - [ ] `site.site` = tu dominio
  - [ ] `site.name` correcto
  - [ ] `metadata.twitter.handle` (opcional)
- [ ] Contenido revisado:
  - [ ] Títulos sin typos
  - [ ] Descripciones completas
  - [ ] Links funcionales
- [ ] Build local successful:

   ```bash
   npm run build
   # Sin errores
   ```

- [ ] Preview local OK:

   ```bash
   npm run preview
   # Visita http://localhost:3000
   ```

---

## 🔄 WORKFLOW RECOMENDADO

### Local Development

```bash
npm run dev
# Edita archivos, ves cambios en tiempo real
```

### Antes de Push

```bash
npm run build
# Verifica que compile sin errores

npm run preview
# Prueba el build final en http://localhost:3000
```

### Publicar

```bash
git add .
git commit -m "Update [descripción cambios]"
git push origin main
# Netlify/Vercel automáticamente deploya
```

---

## 🐛 TROUBLESHOOTING

### Problemas comunes

#### Error: "Image not found"

- Verifica que el archivo existe en `src/assets/images/`
- El path en el código sea correcto
- Usa tilde `~` para imports locales

#### Error: "Build failed"

```bash
# Limpia cache
rm -rf node_modules dist
npm install
npm run build
```

#### Estilo no aplica después de deploy

- Astro cachea CSS
- Netlify: Deploy → Trigger deploy (sin cache)
- Vercel: Redeploy

#### Dominio no resuelve

- DNS puede tardar 24h
- Verifica CNAME/A records en registrador
- Usa `nslookup` o `dig` para verificar

---

## 📊 POST-DEPLOY

### Configurar Analytics

1. **Google Analytics 4**:
   - Ve a [analytics.google.com](https://analytics.google.com)
   - Crea propiedad nueva
   - Copia ID de medición
   - Agrega a Astro:

   En `astro.config.ts`:

   ```typescript
   export default defineConfig({
     integrations: [
       partytown({
         config: {
           forward: ['dataLayer.push'],
         },
       }),
     ],
   });
   ```

   En `src/layouts/PageLayout.astro`:

   ```astro
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXX');
   </script>
   ```

2. **Verificar en Google Search Console**:
   - [search.google.com/search-console/](https://search.google.com/search-console/)
   - Agregar tu sitio
   - Verificar propiedad

---

## 🔐 SEGURIDAD POST-DEPLOY

- ✅ HTTPS habilitado (automático en Netlify/Vercel)
- ✅ Configurar CSP headers (Content Security Policy)
- ✅ Robots.txt configurado (automático)
- ✅ Formularios no envían datos a servidores externos

### Agregar Seguridad Headers en Netlify

Crear `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
```

---

## 📞 VALIDAR FUNCIONALIDAD

Después de deploy, verifica:

- [ ] Página carga en navegador
- [ ] CTAs clickeables:
  - [ ] "Agendar Diagnóstico" → scroll a contacto
  - [ ] "Conocer Servicios" → scroll a servicios
  - [ ] WhatsApp → abre chat
  - [ ] Teléfono → marca número
- [ ] Navegación funciona:
  - [ ] Links del menú van a secciones
  - [ ] Scroll smooth
- [ ] Responsive:
  - [ ] Mobile (320px)
  - [ ] Tablet (768px)
  - [ ] Desktop (1024px)
- [ ] Imágenes cargan rápido
- [ ] No hay errores en consola (F12)

---

## 🚨 ROLLBACK (Si algo sale mal)

```bash
# Ver historial
git log --oneline

# Revertir último commit
git revert HEAD
git push origin main

# O revertir a commit específico
git reset --hard abc1234
git push -f origin main
```

---

## 📈 MANTENIMIENTO

### Actualizaciones regulares

```bash
# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Actualizar Astro
npm install astro@latest
```

### Backup

```bash
# Guardar en GitHub regularmente
git push origin main

# O descargar carpeta completa
```

---

## 💡 TIPS FINALES

1. **Monitorea analytics** para ver qué funciona
2. **Obtén feedback** de usuarios reales
3. **Actualiza contenido** regularmente
4. **Mantén contacto actualizado** (números, emails)
5. **Haz backup** de cambios importantes

---

## 📞 CONTACTO DE SOPORTE

Si tienes problemas:

- [Netlify Support](https://app.netlify.com/support)
- [Vercel Support](https://vercel.com/support)
- [Astro Discord](https://astro.build/chat)

---

**Estado**: 🟢 Listo para publicar
**Última actualización**: 24 de enero de 2026
