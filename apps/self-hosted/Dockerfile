FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json ./
RUN sed -i 's/"workspace:\*"/"5.35.0"/g' package.json
COPY patches/ ./patches/
RUN npm install

COPY . .
RUN npm run build

EXPOSE 1337
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
