#!/bin/bash

cd /home/kyuki3rain/app-js/
git pull
docker-compose -f docker-compose-pro.yaml up -d