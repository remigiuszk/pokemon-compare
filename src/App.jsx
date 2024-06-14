import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import PokemonPage from "./modules/pokemon/containers";
import ErrorPage from "./pages/ErrorPage";
import Theme from "./Theme";
import Wishlist from "./pages/Wishlist";
//import PokemonDetailsPage from "./modules/pokemonDetails/containers";
import Layout from "./modules/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "pokemon",
    element: <PokemonPage />
  },
  // {
  //   path: "pokemon/:pokemonId",
  //   element: <PokemonDetailsPage />
  // },
  {
    path: "wishlist",
    element: <Wishlist />
  }
]);

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<PokemonPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
