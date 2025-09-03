@echo off
setlocal enabledelayedexpansion

.\.venv\Scripts\python.exe -m pip install -q pip-audit pip-licenses bandit codespell

echo.
echo Running pip-audit...
echo.
.\.venv\Scripts\python.exe -m pip-audit -r requirements.txt

echo.
echo Installed licenses:
echo.
.\.venv\Scripts\python.exe -m pip-licenses

echo.
echo Running bandit security checks...
echo.
.\.venv\Scripts\python.exe -m bandit -r src

echo.
echo Checking spelling with codespell...
echo.
.\.venv\Scripts\python.exe -m codespell src
