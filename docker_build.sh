#! /bin/bash

docker-compose up -d
docker exec adidas-related-info_mysql_1 /tmp/seed.sh
