import { clientsActions } from "./clients";
import {
  getClients,
  postClient,
  putClient,
} from "../../../services/api.clients";

const parseClients = (clients) => {
  return clients.map((client) => {
    const name = client.first_name + " " + client.last_name;
    return { ...client, label: name };
  });
};

export const fetchClients = () => {
  return async (dispatch) => {
    try {
      let response;
      response = await getClients(); // get Teams from API
      if (!response.ok) throw new Error("Couldn't fetch clients data");
      let clients = await response.json();

      clients = parseClients(clients);
      dispatch(clientsActions.setClients(clients));
      dispatch(clientsActions.setTotal(clients.length));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createClient = (client) => {
  return async (dispatch) => {
    try {
      let response;
      response = await postClient(client);
      if (!response.ok) throw new Error("Couldn't create new client");

      response = await getClients();
      if (!response.ok) throw new Error("Couldn't fetch clients data");
      let clients = await response.json();

      clients = parseClients(clients);
      dispatch(clientsActions.setClients(clients)); //update clients
      dispatch(clientsActions.setTotal(clients.length));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateClient = (client) => {
  return async (dispatch) => {
    try {
      let response;
      response = await putClient(client);
      if (!response.ok) throw new Error("Couldn't update client");

      response = await getClients();
      if (!response.ok) throw new Error("Couldn't fetch clients data");
      let clients = await response.json();

      clients = parseClients(clients);
      dispatch(clientsActions.setClients(clients)); //update clients
      dispatch(clientsActions.setTotal(clients.length));
    } catch (error) {
      console.log(error);
    }
  };
};
