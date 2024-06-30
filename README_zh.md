# 🌩️ Cloudflare Docker Hub Proxy

_✨ 基于 Cloudflare Worker 的简单 hub.docker.com 代理服务 ✨_

## 📦 使用指南

### 1. 创建 Cloudflare Worker

1. 登录 Cloudflare 账户后，访问 [Workers Dashboard](https://workers.cloudflare.com/)
2. 点击“创建 Worker”按钮以启动新 Worker 的创建过程

### 2. 粘贴脚本代码

📝 在仓库中找到 `worker.js` 文件

3. 将 `worker.js` 文件中的所有代码粘贴至 Cloudflare Workers 的在线代码编辑器里

### 3. 部署 Worker

🚀 确认编辑器中的代码无误后，点击“保存并部署”按钮执行保存与部署操作

4. 部署成功后，你将获得一个专属于你的 Worker 地址，形式如 `https://your-worker-name.workers.dev`。通过这个 URL，你可以代理 Docker Hub

## 🔄 代理使用方法

💡 要通过此代理来访问或下载 Docker 镜像，只需将原 Docker Hub 地址替换为你的 Worker URL

比如，原本的 Docker pull 命令为：

```bash
docker pull nginx:latest
```

现在应更改为：

```bash
docker pull your-worker-name.workers.dev/amd64/nginx:latest
```

## 📖 许可证

本项目遵循 `Apache-2.0 license` 开源协议