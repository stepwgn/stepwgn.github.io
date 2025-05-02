module.exports = {
    globDirectory: "site/",  // Папка, куда MkDocs собирает сайт
    globPatterns: [
        "**/*.{html,css,js,json,xml,png,svg,jpg,jpeg,ico,woff2,ttf,webmanifest}",  // Кэшируемые расширения
    ],
    swDest: "site/sw.js",  // Куда сохранить Service Worker
    runtimeCaching: [{
        urlPattern: /\.(?:html|css|js|json)$/,  // Динамическое кэширование
        handler: "StaleWhileRevalidate",  // Стратегия: "Кэш + обновление в фоне"
    }],
    skipWaiting: true,  // Активировать SW сразу
    clientsClaim: true,  // Контролировать все вкладки
};
