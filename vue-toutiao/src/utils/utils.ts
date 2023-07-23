export const getApiUrl = (str) => {
  const devArr = [ "localhost"];
  const apiArr = ["localhost:4700"];
  let localUrl = "192.168.";
  let isDev =
    devArr.includes(document.domain) || document.domain.includes(localUrl);
  let isProd = apiArr.includes(document.domain);
  // 需要后端接   线上环境的域名组

  if (str === "socket") {
    if (isDev) {
      return "wss://localhost:4700/ws";
    }

    if (isProd) {
      return "wss://localhost:4700/ws";
    }
  }

  if (isDev) {
    return "http://localhost:4700";
  }

  if (isProd) {
    return "http://localhost:4700";
  }
};
