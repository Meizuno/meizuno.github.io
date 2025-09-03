#!/bin/bash
set -e

GREEN='\033[0;32m'
NC='\033[0m'

source .venv/bin/activate
pip install -q pip-audit pip-licenses bandit codespell

echo -e "\n${GREEN}Running pip-audit...${NC}\n"
pip-audit -r requirements.txt

echo -e "\n${GREEN}Installed licenses:${NC}\n"
pip-licenses

echo -e "\n${GREEN}Running bandit security checks...${NC}\n"
bandit -r ./src

echo -e "\n${GREEN}Checking spelling with codespell...${NC}\n"
codespell ./src
