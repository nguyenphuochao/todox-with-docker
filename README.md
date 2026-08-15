## How to setup run source by docker

1. download docker

2. cd todox-with-docker/

3. cd backend/

4. copy .env.example to .env

5. cd ../

6. run CMD: docker compose up

## How to setup run source by node

1. download nodejs

2. cd todox-with-docker/

3. cd backend/

    3.1 copy .env.example to .env

    3.2 npm install

    3.3 npm run dev

4. cd frontend/

    4.1 npm install

    4.2 npm run dev

## How to deloy source up VPS Ubuntu/Linux
  
1. Dùng lệnh ssh root@dia_chi_vps_cua_ban để kết nối vào VPS

2. Cập nhật hệ thống và cài đặt môi trường:
   sudo apt update && sudo apt upgrade -y
   sudo apt install docker.io docker-compose-v2 -y

3. Kiểm tra docker sau khi cài: docker --version

4. git clone <url_repository_cua_ban>

5. cd <ten_thu_muc_source>

6. Chạy lệnh: docker compose up -d --build

