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
    <div>
      <Header />
      <Home />
      <MovieCard />
      <MovieDetail />
      <MovieListing />
      <Footer />
      <PageNotFound />
    </div>
  );
}

export default App;
