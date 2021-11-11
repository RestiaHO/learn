docker run -d --name mongo-yapi -p 27017:27017 -v ~/_data:/data/db mongo:4.4.6



docker run -it --rm \
 --link mongo-yapi:mongo \
 --entrypoint npm \
 --workdir /api/vendors \
 registry.cn-hangzhou.aliyuncs.com/anoy/yapi \
 run install-server



docker run -d \
 --name yapi \
 --link mongo-yapi:mongo \
 --workdir /api/vendors \
 -p 3000:3000 \
 registry.cn-hangzhou.aliyuncs.com/anoy/yapi \
 server/app.js