# Используем официальный образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN yarn install

# Копируем остальные файлы проекта
COPY . .

# Открываем порт (например, 8080)
EXPOSE 8080

# Команда для запуска клиента
CMD ["yarn", "dev"]
