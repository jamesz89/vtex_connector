const axios = require("axios").default;

const accountName = "storebbb";
const appKey = "vtexappkey-storebbb-KBQGQJ";
const appToken =
  "PFUUNGVQUUTPVLQEHOPCAKWSMCVOHNMOAFHLZEUNPEECJYMZOCYOHNTFJCHLLGJGHEOPEFECTCMVFTIOPVAEPYGNMBCWXJCJVYVFKXVIXVUFAYZPTTVPFFRJYADCCIFK";
const config = {
  headers: {
    Accept: "application/vnd.vtex.ds.v10+json",
    "Content-Type": "application/json",
    "x-vtex-api-appKey": appKey,
    "x-vtex-api-appToken": appToken,
  },
};
const baseUrl = `https://${accountName}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`;

const getCatalogSize = async () => {
  const response = await axios.get(baseUrl);
  const resources = response.headers.resources;
  return parseInt(resources.split("/")[1]);
};

const downloadProductsFromCatalog = async (first, last) => {
  //VTEX API returns max 50 products per request
  const url = `${baseUrl}?_from=${first}&_to=${last}`;
  const response = await axios.get(url, config);
  console.log(response.data)
};