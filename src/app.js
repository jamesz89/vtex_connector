import Downloader from "../src/downloader.js";
import config from "../src/config.js";
import productMapper from '../src/mapper.js';

const productDownloader = new Downloader(config)

const start = async () => {
  const downloadedProducts = await productDownloader.retrieveAllProducts()
  const mappedProducts = productMapper(downloadedProducts)
  console.log(mappedProducts[0])
  //Upload products here...
}

start()


