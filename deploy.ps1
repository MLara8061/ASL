# Script de Deploy para Hostinger
# Ejecuta este script manualmente para desplegar los cambios

Write-Host "🚀 Iniciando deploy a Hostinger..." -ForegroundColor Cyan

# Conectar y ejecutar comandos en el servidor
ssh -p 65002 u991047526@82.29.199.84 @"
cd domains/acercandosoluciones.com/public_html
echo '📦 Actualizando código desde GitHub...'
git pull origin main
echo '📦 Instalando dependencias...'
npm install
echo '🔨 Compilando proyecto...'
npm run build
echo '✅ Deploy completado!'
"@

Write-Host "`n✅ Deploy finalizado exitosamente!" -ForegroundColor Green
Write-Host "Visita: https://acercandosoluciones.com" -ForegroundColor Yellow
