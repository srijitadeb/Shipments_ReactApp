import configs from '../config.json';

const makeQueries = (params: { [key: string]: any } = {}): string => {
  if (!params.page) {
    params.page = configs.defaultPage;
  }
  let queries: string = configs.staticQueryParam;
  Object.keys(params).forEach((key: string) => {
    if (params[key]) {
      queries += `${queries ? `&` : ``}${
        key === configs.columnNames[0] ? key : `_${key}`
      }=${params[key]}`;
    }
  });
  return queries;
};

const apis = {
  getShipments: (params: { [key: string]: any } = {}) => {
    const queries = makeQueries(params);
    const url = params.url ? params.url : `${configs.baseUrl}${queries}`;
    return fetch(url);
  },
  updateShipment: (id: string, name: string) => {
    const url = `${configs.baseUrl}/${id}`;
    return fetch(url, {
      method: configs.updateMethodName,
      headers: configs.updateHeaders,
      body: JSON.stringify({ name }),
    });
  },
};

export default apis;
