# ---------- Stage 1: Base ----------  
FROM node:18-alpine AS base
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# ---------- Stage 2: Development ----------  
FROM base AS development
WORKDIR /app

# Copy source code
COPY . .

# Expose dev server port
EXPOSE 3000

# Start React in development mode
CMD ["npm", "start"]

# ---------- Stage 3: Build for Production ----------  
FROM base AS build
WORKDIR /app

# Copy source code
COPY . .

# Build optimized production bundle
RUN npm run build

# ---------- Stage 4: Production server ----------  
FROM nginx:alpine AS production

# Copy built React app from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
