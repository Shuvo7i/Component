# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

# REQUIRED working directory name from assignment
WORKDIR /bhuyan_mdakramul_ui_garden

# Copy dependency files
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy all project files
COPY . .

# Build Storybook as static site
RUN npm run build-storybook


# ---------- Stage 2: Production ----------
FROM nginx:alpine

# Copy built Storybook files to nginx
COPY --from=build /bhuyan_mdakramul_ui_garden/storybook-static /usr/share/nginx/html

# Make nginx listen on 8083 instead of 80
RUN sed -i 's/listen\s\+80;/listen 8083;/' /etc/nginx/conf.d/default.conf

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]