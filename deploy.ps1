# Script de Deploy para Hostinger
# Ejecuta este script manualmente para desplegar los cambios

Write-Host "🚀 Iniciando deploy a Hostinger..." -ForegroundColor Cyan

# Conectar y ejecutar comandos en el servidor
# IMPORTANTE: Se limpian los archivos _astro antiguos para evitar conflictos de hashes
ssh -p 65002 u991047526@82.29.199.84 @"
cd domains/acercandosoluciones.com/public_html
echo '📦 Actualizando código desde GitHub...'
git pull origin main
echo '📦 Instalando dependencias...'
npm install
echo '🔨 Compilando proyecto...'
npm run build
echo '🧹 Limpiando archivos _astro antiguos...'
rm -rf _astro
echo '📂 Copiando archivos de dist a public_html...'
# Copiar todo el contenido de dist/ a la raíz (public_html)
cp -r dist/* .
# Asegurar que .htaccess esté en su lugar
cp .htaccess . 2>/dev/null || true
echo '✅ Deploy completado!'
"@

Write-Host "`n✅ Deploy finalizado exitosamente!" -ForegroundColor Green
Write-Host "Visita: https://acercandosoluciones.com" -ForegroundColor Yellow
