# 基础镜像
FROM nginx
# author
MAINTAINER cool

# 挂载目录
VOLUME /home/cool/projects/cool-ui
# 创建目录
RUN mkdir -p /home/cool/projects/cool-ui
# 指定路径
WORKDIR /home/cool/projects/cool-ui
# 复制conf文件到路径
COPY ./nginx/conf/nginx.conf /etc/nginx/nginx.conf
# 复制html文件到路径
COPY ./admin/dist /home/cool/projects/cool-ui
