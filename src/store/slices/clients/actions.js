import { clientsActions } from "./clients";

const CLIENTS = [
  { id: 1, first_name: "Abigail", last_name: "O'Flynn" },
  { id: 2, first_name: "Marchall", last_name: "Chinery" },
];

const parseClients = (clients) => {
  return clients.map((client) => {
    const name = client.first_name + " " + client.last_name;
    return { ...client, label: name };
  });
};

export const fetchClients = () => {
  return async (dispatch) => {
    try {
      const clients = parseClients(CLIENTS);
      dispatch(clientsActions.setClients(clients));
    } catch (error) {
      console.log(error);
    }
  };
};
