FROM node:20-bookworm AS build

RUN corepack enable

WORKDIR /app

# Copy dependency/config files first for layer caching
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ .yarn/

# Copy all workspace package.json files so yarn can resolve them
COPY packages/ packages/
COPY apps/self-hosted/package.json apps/self-hosted/

# Install dependencies
RUN yarn install

# Copy remaining source
COPY . .

# Build monorepo packages, then the Strapi app
RUN yarn build && yarn workspace self-hosted build

# --- Production stage ---
FROM node:20-bookworm-slim

RUN corepack enable

WORKDIR /app

COPY --from=build /app .

WORKDIR /app/apps/self-hosted

ENV NODE_ENV=production

EXPOSE 1337

CMD ["yarn", "start"]
