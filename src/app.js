const Downloader = require("./downloader");
const config = require("./config");

const productDownloader = new Downloader(config)

const start = async () => {
  const products = await productDownloader.retrieveAllProducts()
  console.log(products[0])
}

start()


