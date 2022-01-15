const Downloader = require("./downloader");
const config = require("./config");
const productMapper = require('./mapper')

const productDownloader = new Downloader(config)

const start = async () => {
  const downloadedProducts = await productDownloader.retrieveAllProducts()
  const mappedProducts = productMapper(downloadedProducts)
  console.log(mappedProducts[0])
  //Upload products here...
  
}

start()


