import { useState, useEffect } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { fetchDataFromAPI } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./redux/slices/homeSlice";
import Header from "./components/header/Header";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromAPI("/configuration").then((response) => {
      dispatch(
        getApiConfiguration({
          backDrop: response?.images?.secure_base_url + "original",
          poster: response?.images?.secure_base_url + "original",
          profile: response?.images?.secure_base_url + "original",
        })
      );
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data?.map(({ genres }) => {
      return genres.map((item) => {
        allGenres[item?.id] = item;
      });
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:mediaType/:id",
        element: <Details />,
      },
      {
        path: "/search/:query",
        element: <SearchResult />,
      },
      {
        path: "/explore/:mediaType",
        element: <Explore />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default App;
