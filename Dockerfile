FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libicu-dev \
    curl \
    && docker-php-ext-install zip intl

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer \
    | php -- --install-dir=/usr/local/bin --filename=composer

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Fix Apache MPM conflict
RUN a2dismod mpm_event
RUN a2enmod mpm_prefork

# Set working directory
WORKDIR /var/www/html/ci

# Set Apache document root
ENV APACHE_DOCUMENT_ROOT /var/www/html/ci/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf

# Allow .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

RUN sed -i 's/80/${PORT}/g' /etc/apache2/ports.conf
RUN sed -i 's/:80/:${PORT}/g' /etc/apache2/sites-available/000-default.conf

EXPOSE 8080

# Install dependencies on container start
# CMD composer install && apache2-foreground
CMD apache2-foreground