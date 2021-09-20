module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qrcode-gen/'
    : '/',
    pwa: {
      name: "QR Code Generator",
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      themeColor: "#FFFFFF",
      assetsVersion: "20210920-1200",
      manifestOptions: {
        short_name: "qrcode-gen"
      },
    }
}