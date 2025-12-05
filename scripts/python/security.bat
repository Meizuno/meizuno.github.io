@echo off
setlocal enabledelayedexpansion

.\.venv\Scripts\python.exe -m pip install -q pip-audit pip-licenses bandit codespell

echo.
echo Running pip-audit...
echo.
.\.venv\Scripts\pip-audit.exe -r requirements.txt

echo.
echo Installed licenses:
echo.
.\.venv\Scripts\pip-licenses.exe

echo.
echo Running bandit security checks...
echo.
.\.venv\Scripts\bandit.exe -r src

echo.
echo Checking spelling with codespell...
echo.
.\.venv\Scripts\codespell.exe src
