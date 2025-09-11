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

REM Delete needed folder and files
if exist .venv rmdir /s /q .venv
if exist src rmdir /s /q src
if exist requirements.txt del /f /q requirements.txt

REM Create python virtual environment
python -m venv .venv

REM Install dependencies
.\.venv\Scripts\python.exe -m pip install fastapi uvicorn structlog

REM Generate requirements.txt
for /f "tokens=2 delims=: " %%A in ('.\.venv\Scripts\python.exe -m pip show fastapi ^| findstr Version') do set FASTAPI_VERSION=%%A
for /f "tokens=2 delims=: " %%A in ('.\.venv\Scripts\python.exe -m pip show uvicorn ^| findstr Version') do set UVICORN_VERSION=%%A
for /f "tokens=2 delims=: " %%A in ('.\.venv\Scripts\python.exe -m pip show structlog ^| findstr Version') do set STRUCTLOG_VERSION=%%A


echo fastapi==%FASTAPI_VERSION%>requirements.txt
echo uvicorn==%UVICORN_VERSION%>>requirements.txt
echo uvicorn==%STRUCTLOG_VERSION%>>requirements.txt

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
echo.>> main.py

REM Generate logger.py
echo import logging >> logger.py
echo import structlog >> logger.py
echo.>> logger.py
echo structlog.configure( >> logger.py
echo     processors=[ >> logger.py
echo         structlog.contextvars.merge_contextvars, >> logger.py
echo         structlog.processors.add_log_level, >> logger.py
echo         structlog.processors.StackInfoRenderer(), >> logger.py
echo         structlog.dev.set_exc_info, >> logger.py
echo         structlog.processors.TimeStamper(fmt="%Y-%m-%d %H:%M:%S", utc=False), >> logger.py
echo         structlog.dev.ConsoleRenderer() >> logger.py
echo     ], >> logger.py
echo     wrapper_class=structlog.make_filtering_bound_logger(logging.NOTSET), >> logger.py
echo     context_class=dict, >> logger.py
echo     logger_factory=structlog.PrintLoggerFactory(), >> logger.py
echo     cache_logger_on_first_use=False >> logger.py
echo ) >> logger.py
echo log = structlog.get_logger() >> logger.py
echo.>> logger.py

cd ..

echo FastAPI Start App generate successfully

echo To activate virtual environment, run:
echo     .\.venv\Scripts\activate

echo To start FastAPI application, run:
echo     uvicorn src.main:app --host 0.0.0.0 --port 8000
