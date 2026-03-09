FROM php:8.2-cli

WORKDIR /app

RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libicu-dev \
    curl \
    && docker-php-ext-install zip intl

# install composer
RUN curl -sS https://getcomposer.org/installer \
    | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer install --no-interaction --no-dev --optimize-autoloader

EXPOSE 8080

CMD php -S 0.0.0.0:8080 -t ci/public