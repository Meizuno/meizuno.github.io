#!/bin/bash
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if directory is empty
if [ "$(ls -A)" ]; then
    read -p "There are files in the current directory. Continue and perhaps overwrite them? (Y/N): " USER_CONFIRM < /dev/tty
    if [ "$USER_CONFIRM" != "Y" ] && [ "$USER_CONFIRM" != "y" ]; then
        echo "Canceled!"
        exit 1
    fi
fi

# Delete needed files
[ -d ".venv" ] && rm -rf .venv
[ -d "src" ] && rm -rf src
[ -f "requirements.txt" ] && rm -f requirements.txt

# Create virtual environment
python3 -m venv .venv

# Activate virtual environment
source .venv/bin/activate
pip install --upgrade pip
pip install fastapi uvicorn structlog

# Get packages versions
FASTAPI_VERSION=$(pip show fastapi | grep Version | awk '{print $2}')
UVICORN_VERSION=$(pip show uvicorn | grep Version | awk '{print $2}')
STRUCTLOG_VERSION=$(pip show structlog | grep Version | awk '{print $2}')

# Generate requirements.txt
echo "fastapi==$FASTAPI_VERSION" > requirements.txt
echo "uvicorn==$UVICORN_VERSION" >> requirements.txt
echo "structlog==$STRUCTLOG_VERSION" >> requirements.txt

# Create project structure
mkdir -p src

# Generate main.py
cat > src/main.py << EOF
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
EOF

# Generate logger.py
cat > src/logger.py << EOF
import logging
import structlog

structlog.configure(
    processors=[
        structlog.contextvars.merge_contextvars,
        structlog.processors.add_log_level,
        structlog.processors.StackInfoRenderer(),
        structlog.dev.set_exc_info,
        structlog.processors.TimeStamper(fmt="%Y-%m-%d %H:%M:%S", utc=False),
        structlog.dev.ConsoleRenderer()
    ],
    wrapper_class=structlog.make_filtering_bound_logger(logging.NOTSET),
    context_class=dict,
    logger_factory=structlog.PrintLoggerFactory(),
    cache_logger_on_first_use=False
)
logger = structlog.get_logger()
EOF

echo -e "\n${GREEN}FastAPI Start App generated successfully${NC}\n"

echo -e "${GREEN}To activate virtual environment, run:${NC}"
echo -e "    ${BLUE}source .venv/bin/activate${NC}"

echo -e "${GREEN}To start FastAPI application, run:${NC}"
echo -e "    ${BLUE}uvicorn src.main:app --host 0.0.0.0 --port 8000${NC}"
