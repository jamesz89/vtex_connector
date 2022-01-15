const axios = require("axios").default;

class Downloader {
  constructor(config) {
    (this.accountName = config.accountName),
      (this.appKey = config.appKey),
      (this.appToken = config.appToken);
  }
  fetchCatalogSize = async () => {
    const response = await axios.get(
      `https://${this.accountName}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`
    );
    const resources = response.headers.resources;
    return parseInt(resources.split("/")[1]);
  };

  performGetRequest = async (url) => {
    const config = {
      headers: {
        Accept: "application/vnd.vtex.ds.v10+json",
        "Content-Type": "application/json",
        "x-vtex-api-appKey": this.appKey,
        "x-vtex-api-appToken": this.appToken,
      },
    };
    const response = await axios.get(url, config);
    return response;
  };

  retrieveAllProducts = async () => {
    const output = [];
    //Calculate amount of pages to fetch
    const catalogSize = await this.fetchCatalogSize();
    const loops = Math.floor(catalogSize / 50) + 1;
    let start = 0;
    let end = 49;

    //Loop pages of catalog
    for (let i = 1; i < loops; i++) {
      let requestUrl = `https://${this.accountName}.vtexcommercestable.com.br/api/catalog_system/pub/products/search?_from=${start}&_to=${end}`;
      console.log("fetching page", i);
      let result = await this.performGetRequest(requestUrl);
      let items = result.data;

      //Push each product into an array
      for (let k in items) {
        let item = items[k];
        console.log("downloading...", item.productName);
        output.push(item);
      }
      start = start + 50;
      end = end + 50;
    }
    return output;
  };
}

export default Downloader
