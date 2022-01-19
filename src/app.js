import 'dotenv/config'
import Downloader from "./stages/downloader.js";
import productMapper from './stages/mapper.js';
import uploader from "./stages/uploader.js";

const config = {
  baseUrl: process.env.BASE_URL,
  accountName: process.env.ACCOUNT_NAME,
  appKey: process.env.APP_KEY,
  appToken: process.env.APP_TOKEN
}

const productDownloader = new Downloader(config)

const start = async () => {
  const downloadedProducts = await productDownloader.retrieveAllProducts()
  const mappedProducts = productMapper(downloadedProducts)
  uploader(mappedProducts)
}

start()