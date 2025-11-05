# Étape 1 : build
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : serveur
FROM node:20

RUN npm install -g serve
WORKDIR /app

COPY --from=builder /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "3000"]
EXPOSE 3000
