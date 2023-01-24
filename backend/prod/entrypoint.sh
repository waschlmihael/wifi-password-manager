#!/bin/bash
BACKEND_APP_PORT=${BACKEND_PORT:-8000}

cd /app/

/opt/venv/bin/gunicorn backend.wsgi:application --bind "0.0.0.0:${BACKEND_APP_PORT}"
