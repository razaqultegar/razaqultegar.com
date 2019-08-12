const config = {
  siteTitle: "Razaqul Tegar",
  siteTitleShort: "Razaqul Tegar",
  siteTitleAlt: "Razaqul Tegar",
  siteLogo: "/logos/razaqultegar.jpg",
  siteUrl: "https://razaqultegar.com",
  repo: "https://github.com/razaqultegar/razaqultegar.com",
  pathPrefix: "",
  siteDescription: "Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Developer sekaligus CTO di Puskomedia Indonesia",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-42068444-1",
  googleSiteVerification: "V2jfZEZ-il-9PSdEJO0D9KCWbCzHTpupwt5MvnWQZjs",
  disqusShortname: "razaqultegar",
  userName: "Razaqul",
  userEmail: "myrazaqul@gmail.com",
  userTwitter: "razaqultegar",
  userLocation: "Purwokerto, ID",
  userAvatar: "https://api.adorable.io/avatars/150/razaqultegar.png",
  userDescription: "Saya sering membuat aplikasi/program dan menulis semua yang saya ketahui.",
  themeColor: "#484848",
  backgroundColor: "#F6F5ED"
};

if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
