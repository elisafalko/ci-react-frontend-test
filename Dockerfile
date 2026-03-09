FROM php:8.2-cli

WORKDIR /app

RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libzip-dev \
    libicu-dev \
    nodejs \
    npm \
    && docker-php-ext-install zip intl

# composer
RUN curl -sS https://getcomposer.org/installer \
 | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

# backend deps
WORKDIR /app/ci
RUN composer install --no-interaction --no-dev --optimize-autoloader

RUN mkdir -p /app/ci/writable && chmod -R 777 /app/ci/writable

# build react
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# copy react build to public
RUN cp -r build/* /app/ci/public/

EXPOSE 8080

CMD php -S 0.0.0.0:8080 -t /app/ci/public