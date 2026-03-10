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

# install backend deps
WORKDIR /app/ci
RUN composer install --no-interaction --no-dev --optimize-autoloader

# RUN mkdir -p /app/ci/writable && chmod -R 777 /app/ci/writable
RUN mkdir -p writable && chmod -R 777 writable

# копируем билд туда же куда volume писал
RUN mkdir -p /app/ci/public/assets
# RUN cp -r dist/* /app/ci/public/assets/ || cp -r build/* /app/ci/public/assets/

EXPOSE 8080

ENV CI_ENVIRONMENT=development

CMD php -S 0.0.0.0:8080 -t /app/ci/public