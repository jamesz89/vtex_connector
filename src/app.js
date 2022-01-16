import Downloader from "./stages/downloader.js";
import config from "../src/config.js";
import productMapper from './stages/mapper.js';
import uploader from "./stages/uploader.js";

const productDownloader = new Downloader(config)

const start = async () => {
  const downloadedProducts = await productDownloader.retrieveAllProducts()
  const mappedProducts = productMapper(downloadedProducts)
  uploader(mappedProducts)
}

start()


