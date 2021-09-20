module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
    pwa: {
      name: "QR-Code Generator",
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      assetsVersion: "20210920-0900",
      manifestOptions: {
        short_name: "QRGen"
      },
    }
}