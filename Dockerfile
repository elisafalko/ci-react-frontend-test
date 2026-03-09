FROM php:8.2-cli

WORKDIR /app

RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libicu-dev \
    curl \
    && docker-php-ext-install zip intl

RUN curl -sS https://getcomposer.org/installer \
 | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

WORKDIR /app/ci
RUN composer install --no-interaction --no-dev --optimize-autoloader

RUN mkdir -p /app/ci/writable && chmod -R 777 /app/ci/writable

EXPOSE 8080

CMD php -S 0.0.0.0:8080 -t /app/ci/public