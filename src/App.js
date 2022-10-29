import "./App.scss";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataLoad from "./pages/DataLoad/DataLoad";
import Clients from "./pages/Clients/Clients";
import Products from "./pages/Products/Products";
import Purchases from "./pages/Purchases/Purchases";
import Queries from "./pages/Queries/Queries";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filesActions } from "./store/slices/files/files";
import { fetchProducts } from "./store/slices/products/actions";
import { fetchClients } from "./store/slices/clients/actions";

const Pages = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<DataLoad />} />
        <Route path="data-load" element={<DataLoad />} />
        <Route path="clients" element={<Clients />} />
        <Route path="products" element={<Products />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="queries" element={<Queries />} />
      </Route>
    </Routes>
  );
};

function App() {
  const areFilesLoaded = useSelector((state) => state.files.loaded);

  const dispatch = useDispatch();

  //isLoaded flag must be setted only after files are sent
  useEffect(() => {
    if (!areFilesLoaded) dispatch(filesActions.setLoaded(true));
  }, []);

  //Get catalogs data from API only after files are sent
  useEffect(() => {
    if (areFilesLoaded) {
      dispatch(fetchClients());
      dispatch(fetchProducts());
    }
  }, [areFilesLoaded]);
  return (
    <Router>
      <Layout>
        <Pages />
      </Layout>
    </Router>
  );
}

export default App;
