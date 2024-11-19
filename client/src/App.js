import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/error404/error";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import Seasons from "./components/seasons/Seasons";
import Favourites from "./components/favourite/Favourites";
import WatchList from "./components/watchlist/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes Wrapped with Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/movies"
          element={
            <Layout>
              <Movies />
            </Layout>
          }
        />
        <Route
          path="/seasons"
          element={
            <Layout>
              <Seasons />
            </Layout>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Layout>
              <WatchList />
            </Layout>
          }
        />
        <Route
          path="/favourites"
          element={
            <Layout>
              <Favourites />
            </Layout>
          }
        />

        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
