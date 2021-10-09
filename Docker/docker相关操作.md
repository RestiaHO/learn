# Docker离线安装

## 安装.rpm包

```
yum install -y ./rpm包路径
```



## 设置开机自启

```
systemctl enable --now docker
```



## Docker 镜像

```
/* 查看docker镜像 */
docker images

/* 创建镜像 */
docker load < docker *.tar 或 docker load -i *.tar

注：
1. *.tar 为镜像包名
2. < 和 -i 均代表指向
```



## 开启容器

```
docker run -d 后台启动
		  --name 如api 镜像命名
		  -v ~/ls:/目录 指定路径
		  -p 31:3306 指定端口指向
		  -e 指定环境变量
		  最后选择目标镜像
注：
1. ~ 为家目录 或代表 /home/kv
2. 31 为外部访问端口； 3306 为容器端口
```



## 删除镜像

```
docker rm -f NAMES OR CONTAINERID

注：
1. NAMES OR CONTAINERID 为容器id或容器名称
```



## 重启Docker

```
docker restart NAMES OR CONTAINERID

注：
1. NAMES OR CONTAINERID 为容器id或容器名称
```



## 查看容器

```
/* 查看正在运行的容器 */
docker ps

/* 查看所有容器 */
docker ps -a
```



## 进入容器

```
docker exec -it NAMES OR CONTAINERID bash

注：
1. NAMES OR CONTAINERID 为容器id或容器名称
```



## 进入容器后的基本操作

```
1. top 查看进程
2. c 切换进程详情
3. M 内存排序
4. q 退出终端
5. exit 退出容器
```



## 重启某一个服务

```
/* 强制杀死某个服务 */
kill -9 PID

/* 查看.sh文件中，需要重启服务的命令行 */
cat xx.sh 

/* 前台重启 */
java -jar -Duser.timezone=GMT+08 xx.jar --Spring.config.location=xx.yml

/* 后台重启 */
nohup java -jar -Duser.timezone=GMT+08 xx.jar --Spring.config.location=xx.yml &>/dev/null &

注：
1. -Duser.timezone=GMT+08 设置时区
2. --Spring.config.location=xx.yml 将xx.jar使用该.yml配置
3. &>/dev/null 丢去前台输出
4. & 启用后台
```



## 查看信息

```
docker info
```



## 查看容器详情

```
docker inspect NAMES
```



## 查看容器记录

```
docker history NAMES
```









