#!/bin/bash
set -e

# Check if directory is empty
if [ "$(ls -A . 2>/dev/null)" != "" ]; then
    read -p "There are files in the current directory. Continue and perhaps overwrite them? (Y/N): " USER_CONFIRM < /dev/tty
    if [ "$USER_CONFIRM" != "Y" ] && [ "$USER_CONFIRM" != "y" ]; then
        echo "Canceled!"
        exit 1
    fi
fi

# Get project name
read -p "Project name: " USER_INPUT < /dev/tty

# Delete needed files
[ -d ".venv" ] && rm -rf .venv
[ -d "src" ] && rm -rf src
[ -f "requirements.txt" ] && rm -f requirements.txt

# Create virtual environment
python3 -m venv .venv

# Activate virtual environment
source .venv/bin/activate
pip install --upgrade pip
pip install django

# Get packages versions
DJANGO_VERSION=$(pip show django | grep Version | awk '{print $2}')

# Generate requirements.txt
echo "django==$DJANGO_VERSION" > requirements.txt

# Create project structure
mkdir -p src

# Generate project
django-admin startproject $USER_INPUT src

echo
echo "To activate virtual environment, run:"
echo "    source .venv/bin/activate"

echo "Open source directory, run:"
echo "    cd src"

echo "To start Django application, run:"
echo "    python manage.py runserver"
