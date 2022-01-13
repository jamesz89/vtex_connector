const axios = require("axios").default;

//Config
const accountName = "storebbb";
const appKey = "vtexappkey-storebbb-KBQGQJ";
const appToken =
  "PFUUNGVQUUTPVLQEHOPCAKWSMCVOHNMOAFHLZEUNPEECJYMZOCYOHNTFJCHLLGJGHEOPEFECTCMVFTIOPVAEPYGNMBCWXJCJVYVFKXVIXVUFAYZPTTVPFFRJYADCCIFK";

const performGetRequest = async (url) => {
  const config = {
    headers: {
      Accept: "application/vnd.vtex.ds.v10+json",
      "Content-Type": "application/json",
      "x-vtex-api-appKey": appKey,
      "x-vtex-api-appToken": appToken,
    },
  };
  const response = await axios.get(url, config);
  return response;
};

const fetchCatalogSize = async () => {
  const response = await axios.get(
    `https://${accountName}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`
  );
  const resources = response.headers.resources;
  return parseInt(resources.split("/")[1]);
};

const retrieveAllProducts = async () => {
  const output = [];
  //Calculate amount of pages to fetch
  const catalogSize = await fetchCatalogSize();
  const loops = Math.floor(catalogSize / 50) + 1;
  let start = 0;
  let end = 49;

  //Loop pages of catalog
  for (let i = 1; i < loops; i++) {
    let requestUrl = `https://${accountName}.vtexcommercestable.com.br/api/catalog_system/pub/products/search?_from=${start}&_to=${end}`;
    console.log("fetching page", i);
    let result = await performGetRequest(requestUrl);
    let items = result.data;

    //Push each product into an array
    for (let k in items) {
      let item = items[k];
      console.log("mapping...", item.productName);
      output.push(item);
    }
    start = start + 50;
    end = end + 50;
  }
  return output;
};

(async () => {
  await retrieveAllProducts();
})();
