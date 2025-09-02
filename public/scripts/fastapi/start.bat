@echo off
setlocal enabledelayedexpansion

where python >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Python not installed. Verify installation using `python -V`
    exit /b 1
)

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

REM Delete needed folder and files
if exist .venv rmdir /s /q .venv
if exist src rmdir /s /q src
if exist requirements.txt del /f /q requirements.txt

REM Create python virtual environment
python -m venv .venv

REM Install dependencies
.\.venv\Scripts\python.exe -m pip install fastapi uvicorn

REM Generate requirements.txt
for /f "tokens=2 delims=: " %%A in ('.\.venv\Scripts\python.exe -m pip show fastapi ^| findstr Version') do set FASTAPI_VERSION=%%A
for /f "tokens=2 delims=: " %%A in ('.\.venv\Scripts\python.exe -m pip show uvicorn ^| findstr Version') do set UVICORN_VERSION=%%A

echo fastapi==%FASTAPI_VERSION%>requirements.txt
echo uvicorn==%UVICORN_VERSION%>>requirements.txt

REM Generate project
mkdir src
cd src

REM Generate main.py
echo from fastapi import FastAPI >> main.py
echo.>> main.py
echo app = FastAPI() >> main.py
echo.>> main.py
echo @app.get("/") >> main.py
echo def read_root(): >> main.py
echo     return {"message": "Hello, FastAPI!"} >> main.py

cd ..

echo FastAPI Start App generate successfully

echo To activate virtual environment, run:
echo     .\.venv\Scripts\activate

echo To start FastAPI application, run:
echo     uvicorn src.main:app --host 0.0.0.0 --port 8000

REM Invoke-WebRequest "http://localhost:3000/scripts/fastapi/start.bat" -OutFile "$env:TEMP\start.bat"; cmd.exe /c "$env:TEMP\start.bat"
