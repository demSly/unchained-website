FROM php:5.6-apache
MAINTAINER Tuschl <tuschl@digitalmobil.com>

# Enable Apache Rewrite Module
RUN a2enmod rewrite

RUN apt-get update && apt-get install -y --force-yes --no-install-recommends \
	wget \
	libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng12-dev \
	&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
	&& docker-php-ext-install -j$(nproc) gd

RUN echo 'date.timezone="Europe/Berlin"' > /usr/local/etc/php/conf.d/php-timezone.ini

ENV COCKPIT_VERSION=1a6177204466b4d935196e80d4dfaf9774daa6cf
ENV COCKPIT_ROOT=/var/www/html
RUN wget -O /usr/src/cockpit.tar.gz https://github.com/agentejo/cockpit/archive/$COCKPIT_VERSION.tar.gz
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["apache2-foreground"]

RUN mkdir /var/www/html/config
RUN mkdir /var/www/html/config/cockpit
RUN mkdir /var/www/html/config/cockpit/i18n
RUN mkdir /var/www/html/storage

COPY config.yaml /var/www/html/config/config.yaml
COPY de.php /var/www/html/config/cockpit/i18n/de.php
COPY storage/cache /var/www/html/storage/cache
COPY storage/collections /var/www/html/storage/collections
COPY storage/data /var/www/html/storage/data
COPY storage/regions /var/www/html/storage/regions
COPY storage/thumbs /var/www/html/storage/thumbs
COPY storage/tmp /var/www/html/storage/tmp
COPY storage/uploads /var/www/html/storage/uploads
COPY storage/api.keys.php /var/www/html/storage/api.keys.php

COPY htaccess /var/www/html/.htaccess

VOLUME /var/www/html/storage
