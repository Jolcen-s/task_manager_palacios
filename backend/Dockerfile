FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./
RUN npm ci

COPY . .
ARG DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
RUN npx prisma generate
RUN npm run build
RUN mkdir -p dist/generated/prisma && cp -r src/generated/prisma/* dist/generated/prisma/
RUN npm prune --omit=dev

EXPOSE 3000

CMD ["node", "dist/index.js"]
