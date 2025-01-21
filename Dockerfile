# Eng so'nggi Node.js versiyasini tanlang
FROM node:18.17.1-alpine

# Ishchi katalogni o'rnatamiz
WORKDIR /app

# Paketlar fayllarini konteynerga nusxalaymiz
COPY package.json package-lock.json ./

# Kerakli modullarni o'rnatamiz
RUN npm install

# Barcha fayllarni konteyner ichiga nusxalaymiz
COPY . .

# Portni ochamiz
EXPOSE 3000

# Next.js dasturini ishga tushirish
CMD ["npm", "run", "dev"]
