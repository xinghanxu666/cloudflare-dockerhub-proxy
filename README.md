# 🌩️ Cloudflare Docker Hub Proxy

_✨ 基于 Cloudflare Worker 的简单 hub.docker.com 代理服务 ✨_

_✨ a simple hub.docker.com proxy on cloudflare worker ✨_  

## 📦 使用教程 / Usage Instructions

### 1. 创建 Cloudflare Worker / Create a Cloudflare Worker

1. 登录 Cloudflare 账号后，进入 [Workers Dashboard](https://workers.cloudflare.com/)

1. After logging into your Cloudflare account, navigate to the [Workers Dashboard](https://workers.cloudflare.com/).


2. 点击 "Create a Worker" 按钮开始创建新的Worker

2. Click the "Create a Worker" button to start setting up a new Worker.

### 2. 复制JS / Copy JavaScript

📝 打开本仓库找到 `worker.js` 文件 

📝 Locate the `worker.js` file in this repository.


3. 将 `worker.js` 中的所有代码复制到Cloudflare Workers的在线编辑器中 

3. Paste all the code from `worker.js` into Cloudflare Workers' online editor.

### 3. 部署Worker / Deploy the Worker

🚀 在编辑器中确认代码无误后，点击“Save & Deploy”按钮进行保存与部署 

🚀 Once you've confirmed the code is correct in the editor, hit the "Save & Deploy" button.


4. 成功部署后，你将获得一个专属的Worker URL，形如  `https://your-worker-name.workers.dev` 从此URL即可代理访问Docker Hub

4. Upon successful deployment, you'll receive a unique Worker URL, like `https://your-worker-name.workers.dev` , which can then be used to proxy Docker Hub.

## 🔄 如何使用代理 / How to Use the Proxy

💡 要通过此代理访问或拉取Docker镜像，只需将原本的Docker Hub地址替换为你的Worker URL即可

💡 To access or pull Docker images through this proxy, simply replace the Docker Hub address with your Worker URL.

例如，原本的Docker pull命令：

For instance, the typical Docker pull command:
```bash
docker pull nginx:latest
```

现在改为：

Should be changed to:
```bash
docker pull your-worker-name.workers.dev/nginx:latest
```

## 📖许可证 / License

项目采用 `Apache-2.0 license` 协议开源

This project is open-sourced under the `Apache-2.0 license`.