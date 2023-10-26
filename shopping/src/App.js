import './App.css';
import { createBrowserRouter , RouterProvider ,Outlet} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout(){

  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : "/",
        element: <Home />
      },
      {
        path : "/Products/:id",
        element: <Products />
      },
      {
        path : "/Product/:id",
        element: <Product />
      }
    ]
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider  router = {router}/>
    </div>
  );
}

export default App;
