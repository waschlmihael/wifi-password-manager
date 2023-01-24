FROM harbor.src.si/dockerhub-proxy/library/node:16.16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/
RUN npm i
COPY . .
RUN npm run build --production

# stage 2 - build the final image and copy the react build files
FROM harbor.src.si/dockerhub-proxy/library/nginx:1.23.2
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]