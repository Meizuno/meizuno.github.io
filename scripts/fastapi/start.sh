#!/bin/bash
set -e

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
pip install fastapi uvicorn

# Get packages versions
FASTAPI_VERSION=$(pip show fastapi | grep Version | awk '{print $2}')
UVICORN_VERSION=$(pip show uvicorn | grep Version | awk '{print $2}')

# Generate requirements.txt
echo "fastapi==$FASTAPI_VERSION" > requirements.txt
echo "uvicorn==$UVICORN_VERSION" >> requirements.txt

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

echo "FastAPI Start App generated successfully"

echo "To activate virtual environment, run:"
echo "    source .venv/bin/activate"

echo "To start FastAPI application, run:"
echo "    uvicorn src.main:app --host 0.0.0.0 --port 8000"
