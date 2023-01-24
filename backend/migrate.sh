#!/bin/bash
cd /app/

echo "Making migrations"
/opt/venv/bin/python manage.py makemigrations --noinput
echo "Migrating tables to database"
/opt/venv/bin/python manage.py migrate --noinput
echo "Creating superuser"
/opt/venv/bin/python manage.py createsuperuser --noinput || true
