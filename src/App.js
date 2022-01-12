import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header.js";
import Home from "./components/Home/home";
import MovieDetail from "./components/MovieDetail/moviedetail";
import PageNotFound from "./components/PageNotFound/pagenotfound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
