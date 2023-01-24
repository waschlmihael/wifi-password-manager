FROM --platform=linux/amd64 harbor.src.si/dockerhub-proxy/library/python:3.9  AS builder
HEALTHCHECK CMD curl --fail http://localhost/api/healthcheck || exit 1

LABEL maintainer="mihael.waschl@src.si"
LABEL description="Web application to get guest wifi password."

WORKDIR /app

COPY ../requirements.txt .
RUN pip install pip --upgrade && \
    pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r ./requirements.txt


FROM --platform=linux/amd64 harbor.src.si/dockerhub-proxy/library/python:3.9-slim
RUN mkdir -p /app
RUN python -m venv /opt/venv

WORKDIR /app

COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /app/requirements.txt .
RUN /opt/venv/bin/pip install --no-cache /wheels/*

COPY ../ .
RUN chmod +x ./prod/entrypoint.sh
ENV AUTOWRAPT_BOOTSTRAP=instana

CMD ["sh", "./prod/entrypoint.sh"]
