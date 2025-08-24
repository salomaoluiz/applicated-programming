FROM node:24-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY . .

RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
RUN apk add --no-cache nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN yarn --immutable

EXPOSE 8081

CMD ["yarn", "deploy"]
