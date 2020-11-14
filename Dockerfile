FROM node:alpine AS build
WORKDIR /consomme

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn test
RUN yarn build

FROM node:alpine
WORKDIR /consomme
COPY --from=build /consomme/dist ./dist
COPY --from=build /consomme/node_modules ./node_modules

CMD ["node", "dist/main"]


