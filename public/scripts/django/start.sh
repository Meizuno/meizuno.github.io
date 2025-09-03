#!/bin/bash
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if directory is empty
if [ "$(ls -A . 2>/dev/null)" != "" ]; then
    read -p "There are files in the current directory. Continue and perhaps overwrite them? (Y/N): " USER_CONFIRM < /dev/tty
    if [ "$USER_CONFIRM" != "Y" ] && [ "$USER_CONFIRM" != "y" ]; then
        echo "Canceled!"
        exit 1
    fi
fi

# Get project name
read -p "$(printf "${BLUE}Project name:${NC} ")" USER_INPUT < /dev/tty

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

echo -e "\n${GREEN}Django Start App generated successfully${NC}\n"

echo -e "${GREEN}To activate virtual environment, run:${NC}"
echo -e "    ${BLUE}source .venv/bin/activate${NC}"

echo -e "${GREEN}Open source directory, run:${NC}"
echo -e "    ${BLUE}cd src${NC}"

echo -e "${GREEN}To start Django application, run:${NC}"
echo -e "    ${BLUE}python manage.py runserver${NC}"
