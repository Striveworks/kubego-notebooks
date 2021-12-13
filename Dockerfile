# --- Build the api binary ---
FROM devopsworks/golang-upx:1.16 as builder
WORKDIR /src
ADD . .
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o notebookapi
RUN /usr/local/bin/upx -9 notebookapi

# --- Build the frontend ---
FROM node:12-buster-slim as frontend
WORKDIR /src
ADD frontend frontend/
RUN npm install -g @angular/cli
RUN cd frontend/kubeflow-common-lib \
    && npm i \
    && npm run build \
    && cd dist/kubeflow \
    && npm link \
    && cd ../../
RUN cd frontend/jupyter \
    && npm i \
    && npm link kubeflow \
    && npm run copyLibAssets && ng build --base-href / --deploy-url /static/ \
    && cd ../../ \
    && cp -r frontend/jupyter/dist/frontend/ static

# --- Build final container ---
FROM gcr.io/distroless/base:3c29f81d9601750a95140e4297a06765c41ad10e
WORKDIR /app
COPY --from=builder /src/notebookapi /app/
COPY --from=frontend /src/frontend/jupyter/dist/frontend/ /app/static
COPY config config

CMD ["/app/notebookapi"]