#!/bin/bash

# Configuration
REPO_NAME="jorge-laveaga-cv-portfolio"
GITHUB_USER="jorgeahmed"

echo "🚀 Preparando despliegue de Portafolio Stitch..."

# Initialize git if not already
if [ ! -d ".git" ]; then
    git init
    echo "✅ Repositorio git inicializado localmente."
fi

# Add files
git add cv-portfolio.html stitch-theme.css main.js style.css index.html
git commit -m "feat: implement integrated stitch-style cv and portfolio"

echo "----------------------------------------------------"
echo "Para desplegar en GitHub Pages:"
echo "1. Crea un nuevo repositorio en GitHub llamado: $REPO_NAME"
echo "2. Ejecuta los siguientes comandos en esta terminal:"
echo ""
echo "   git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. En GitHub, ve a Settings -> Pages y selecciona la rama 'main' para desplegar."
echo "----------------------------------------------------"
echo "✅ ¡Listo para subir!"
