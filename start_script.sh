# git clone https://github.com/kyuki3rain/app-js.git
cd app_js
git pull
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:/rootfs/$PWD" -w="/rootfs/$PWD" docker/compose:alpine-1.27.3 -f docker-compose-pro.yml up --build