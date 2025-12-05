@echo off
setlocal enabledelayedexpansion

REM Check root dir
set EMPTY=1
for /f %%A in ('dir /b') do set EMPTY=0

if %EMPTY%==0 (
    set /p USER_CONFIRM="There are files in the current directory. Continue and perhaps overwrite them? (Y/N): "
    if /i not "!USER_CONFIRM!"=="Y" (
        echo Canceled!
        exit /b 1
    )
)

REM Get project name
set /p USER_INPUT=Project name: 

REM Delete needed folder and files
if exist .venv rmdir /s /q .venv
if exist src rmdir /s /q src
if exist requirements.txt del /f /q requirements.txt

REM Create python virtual environment
python -m venv .venv

REM Install dependencies
.\.venv\Scripts\python.exe -m pip install django

REM Generate requirements.txt
for /f "tokens=2 delims=: " %%A in ('.\.venv\Scripts\python.exe -m pip show django ^| findstr Version') do set DJANGO_VERSION=%%A
echo django==%DJANGO_VERSION%>requirements.txt

REM Create project structure
mkdir src

REM Generate project
.\.venv\Scripts\django-admin.exe startproject %USER_INPUT% src

echo.
echo To activate virtual environment, run:
echo     .\.venv\Scripts\activate

echo Open source directory, run:
echo     cd src

echo To start Django application, run:
echo     python manage.py runserver
