export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      return new Response("<h1>🎉Cloudflare Docker Proxy is Running!</h1><a href='https://github.com/Mxmilu666/cloudflare-dockerhub-proxy'>Github</a>", {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    if (url.pathname === '/token') {
      const authUrl = 'https://auth.docker.io/token' + url.search;
      const authRequest = new Request(authUrl, request);
      return fetch(authRequest);
    }

    url.hostname = 'registry-1.docker.io';
    const modifiedRequest = new Request(url.toString(), request);

    try {
      let response = await fetch(modifiedRequest);

      const authHeader = response.headers.get('Www-Authenticate');
      if (authHeader) {
        const requestUrl = new URL(request.url);
        const newRealm = `https://${requestUrl.hostname}/token`;
        const modifiedAuthHeader = authHeader.replace(/realm="https:\/\/[^"]+"/, `realm="${newRealm}"`);
        response = new Response(response.body, response);
        response.headers.set('Www-Authenticate', modifiedAuthHeader);
      }
      return response;
    } catch (error) {
      console.error('Fetch error:', error);
      return new Response('Error fetching Docker Hub resource', { status: 500 });
    }
  }
};
