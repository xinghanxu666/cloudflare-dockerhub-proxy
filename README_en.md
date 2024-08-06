# 🌩️ Cloudflare Docker Hub Proxy

_✨ a simple hub.docker.com proxy on cloudflare worker ✨_  

[中文版README](README_zh.md)

## 📦 Usage Instructions

### 1. Create a Cloudflare Worker

1. After logging into your Cloudflare account, navigate to the [Workers Dashboard](https://workers.cloudflare.com/).


2. Click the "Create a Worker" button to start setting up a new Worker.

### 2. Copy JavaScript

📝 Locate the `worker.js` file in this repository.

3. Paste all the code from `worker.js` into Cloudflare Workers' online editor.

### 3. Deploy the Worker

🚀 Once you've confirmed the code is correct in the editor, hit the "Save & Deploy" button.

4. Upon successful deployment, you'll receive a unique Worker URL, like `https://your-worker-name.workers.dev` , which can then be used to proxy Docker Hub.

## 🔄 How to Use the Proxy

💡 To access or pull Docker images through this proxy, simply replace the Docker Hub address with your Worker URL.

For instance, the typical Docker pull command:

```bash
docker pull nginx:latest
```

Should be changed to:

```bash
docker pull your-worker-name.workers.dev/amd64/nginx:latest
```

## 📖 License

This project is open-sourced under the `Apache-2.0 license`.
