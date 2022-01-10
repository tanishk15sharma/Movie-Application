import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header.js";
import Home from "./components/Home/home";
import MovieCard from "./components/MovieCard/moviecard";
import MovieDetail from "./components/MovieDetail/moviedetail";
import MovieListing from "./components/MovieListing/movielisting";
import PageNotFound from "./components/PageNotFound/pagenotfound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
