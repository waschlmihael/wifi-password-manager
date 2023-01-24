FROM --platform=linux/amd64 python:3.10.6

LABEL maintainer="mihael.waschl@src.si"
LABEL description="Web application to get guest wifi password."

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/

RUN python -m venv /opt/venv

# Install Python dependencies
COPY ../requirements.txt .
RUN /opt/venv/bin/pip install pip --upgrade && \
    /opt/venv/bin/pip install -r ./requirements.txt

# Add the rest of the code
COPY ../ .

RUN chmod +x /app/dev/entrypoint.sh

