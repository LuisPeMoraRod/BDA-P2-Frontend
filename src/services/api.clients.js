import config from "../config";

export const getClients = async () => {
  const options = {
    method: "GET",
  };

  return fetch(config.resources.clients, options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const postClient = async (client) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(client),
  };

  return fetch(config.resources.clients, options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const putClient = async (client) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(client),
  };

  return fetch(config.resources.clients.concat(`/${client.id}`), options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const deleteClient = async (clientId) => {
  const options = {
    method: "DELETE",
  };

  return fetch(config.resources.clients.concat(`/${clientId}`), options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};
