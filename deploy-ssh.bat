@echo off
echo Conectando al servidor Hostinger...
echo.

rem Ejecutar comandos en el servidor
ssh -p 65002 u991047526@82.29.199.84 "cd domains/acercandosoluciones.com/public_html && pwd && echo 'Actualizando desde GitHub...' && git pull origin main && echo 'Instalando dependencias...' && npm install && echo 'Compilando proyecto...' && npm run build && echo 'Deploy completado!'"

echo.
echo Deploy finalizado!
pause
