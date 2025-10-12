# ---------- Stage 1: Base setup ----------
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ---------- Stage 2: Development ----------
FROM base AS development
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# ---------- Stage 3: Build for Production ----------
FROM base AS build
COPY . .
RUN npm run build

# ---------- Stage 4: Production server ----------
FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
