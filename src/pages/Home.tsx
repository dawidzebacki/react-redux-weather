import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Spinner from "../components/ui/Spinner/Spinner";
import Weather from "../components/Weather/Weather";
import Footer from '../components/Footer/Footer';
import Forecast from '../components/Forecast/Forecast';

import { AppStore } from "../store/store";

const Home: React.FC = () => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <Search />
      <Weather />
      <Forecast />
      <Footer />
    </>
  );
};

export default Home;
