# Instrucciones para Agregar Imágenes - Sección Hero

## Imágenes Requeridas

Para que la sección Hero se vea exactamente como en el diseño proporcionado, necesitas agregar las siguientes imágenes a la carpeta `public/`:

### 1. Logo Circular (`logo-asl-circle.png`)
- **Ubicación**: `public/logo-asl-circle.png`
- **Descripción**: Logo de "Acercando Destinos Soluciones Laborales" en formato circular
- **Dimensiones recomendadas**: 200x200px
- **Formato**: PNG con fondo transparente
- **Estado actual**: ✅ Ya copiado temporalmente

### 2. Imagen del Equipo en Círculo (`hero-team-circle.jpg`)
- **Ubicación**: `public/hero-team-circle.jpg`
- **Descripción**: Foto de equipo visto desde arriba en círculo juntando las manos
- **Dimensiones recomendadas**: 800x800px o mayor
- **Formato**: JPG o PNG
- **Estado actual**: ⚠️ Usando imagen temporal, reemplazar con la imagen correcta del diseño

## Cómo Agregar las Imágenes

1. Coloca las imágenes en la carpeta `public/` del proyecto
2. Asegúrate de que los nombres coincidan exactamente:
   - `logo-asl-circle.png`
   - `hero-team-circle.jpg`
3. Las imágenes se mostrarán automáticamente sin necesidad de reiniciar el servidor

## Características del Diseño Implementado

✅ **Textos exactos del diseño:**
- "LA SOLUCIÓN QUE TU EMPRESA NECESITA"
- "Empresa consultora en recursos humanos"
- Párrafos descriptivos copiados textualmente
- Botón "CONTÁCTANOS AHORA"

✅ **Colores exactos:**
- Azul corporativo: `#0066CC`
- Rojo de acento: `#EF4444`
- Fondo blanco

✅ **Diseño responsive:**
- Adaptable a dispositivos móviles
- Grid de 2 columnas en desktop
- Formas decorativas en rojo y azul

✅ **Elementos eliminados:**
- ❌ Slider anterior (HeroSlider.astro)
- ✅ Reemplazado con diseño estático del cliente (HeroCliente.astro)

## Verificación

Para verificar que todo funciona correctamente:

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre el navegador en `http://localhost:4321`

3. Verifica que:
   - El logo se muestra correctamente
   - La imagen del equipo aparece con formas decorativas
   - Los textos están completos
   - El botón funciona correctamente
   - El diseño se ve bien en móvil y desktop

## Notas Técnicas

- Archivo del componente: `src/components/widgets/HeroCliente.astro`
- Página principal: `src/pages/index.astro`
- Se eliminó la dependencia de `HeroSlider.astro`
- Los textos son exactamente los del diseño proporcionado
