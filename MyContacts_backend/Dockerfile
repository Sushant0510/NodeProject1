# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /MyContacts_backend
COPY . .
RUN yarn install --production
CMD ["node", "index.js"]
