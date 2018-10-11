FROM php:7-apache

ARG COCKPIT_VERSION=0.7.2

RUN apt-get update \
    && apt-get install -y \
	wget zip unzip \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng-dev \
        sqlite3 libsqlite3-dev \
        libssl-dev \
    && pecl install mongodb \
    && pecl install redis \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) iconv gd pdo zip opcache pdo_sqlite \
    && a2enmod rewrite expires

RUN echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/mongodb.ini
RUN echo "extension=redis.so" > /usr/local/etc/php/conf.d/redis.ini

RUN wget https://github.com/agentejo/cockpit/archive/${COCKPIT_VERSION}.zip -O /tmp/cockpit.zip; unzip /tmp/cockpit.zip -d /tmp/; rm /tmp/cockpit.zip
RUN mv /tmp/cockpit-${COCKPIT_VERSION}/.htaccess /var/www/html/.htaccess
RUN mv /tmp/cockpit-${COCKPIT_VERSION}/* /var/www/html/
RUN rm -R /tmp/cockpit-${COCKPIT_VERSION}/
RUN echo "\n\nphp_value post_max_size 256M" >> /var/www/html/.htaccess
RUN echo "\nphp_value  upload_max_filesize 256M" >> /var/www/html/.htaccess
RUN echo 'date.timezone="Europe/Berlin"' > /usr/local/etc/php/conf.d/php-timezone.ini

RUN mkdir /var/www/html/config
RUN mkdir /var/www/html/config/cockpit
RUN mkdir /var/www/html/config/cockpit/i18n

COPY config.yaml /var/www/html/config/config.yaml
COPY de.php /var/www/html/config/cockpit/i18n/de.php
COPY storage /var/www/html/storage

RUN chown -R www-data:www-data /var/www/html

VOLUME /var/www/html/storage
