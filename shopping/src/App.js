import './App.css';
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
import Header from './components/Header/header'; 
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Product from './pages/Product/product';
import Products from './pages/Products/products';

const Layout = () => {

  return (
    <div className='app'>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [ 
      {
      path : "/",
      element : <Home/>
      },
      {
        path : "/Products/:id",
        element : <Products/>
      },
      {
        path : "/Product/:id",
        element :<Product/>
      }
    ]
  }
]
)


function App() { 
 
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}


export default App;




