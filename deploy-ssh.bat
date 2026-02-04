@echo off
echo Conectando al servidor Hostinger...
echo.

rem Ejecutar comandos en el servidor
rem IMPORTANTE: Se limpian los archivos _astro antiguos para evitar conflictos de hashes
ssh -p 65002 u991047526@82.29.199.84 "cd domains/acercandosoluciones.com/public_html && pwd && echo 'Actualizando desde GitHub...' && git pull origin main && echo 'Instalando dependencias...' && npm install && echo 'Compilando proyecto...' && npm run build && echo 'Limpiando archivos antiguos...' && rm -rf _astro && echo 'Copiando archivos de dist a public_html...' && cp -r dist/* . && cp .htaccess . 2>/dev/null; echo 'Deploy completado!'"

echo.
echo Deploy finalizado!
pause
