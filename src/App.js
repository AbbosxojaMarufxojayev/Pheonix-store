import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import SubHeader from "./components/sub-header/SubHeader"
import Navbar from "./components/navbar/Navbar"
import Home from "./router/home/Home"
import Cart from "./router/cart/Cart"
import Like from "./router/like/Like"
import Compare from './router/compare/Compare';
import Footer from './components/footer/Footer';
import SingleRoute from './components/single-route/SingleRoute';
import Admin from './router/admin/Admin';
import { useSelector } from "react-redux"

function App() {
  const cart = useSelector(s=> s.cart)
  const auth = useSelector(s=> s.auth)



  return (
    <div className="App">
      <SubHeader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/compare' element={<Compare/>}/>
        <Route path='/like' element={<Like karzinka={cart}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {
          auth ? 
          <Route path='/' element={<Navigate replace to={'/admin'}/>}/>
          :
          <Route path='/admin' element={<Navigate replace to={'/'}/>}/>
        }
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/products/:id' element={<SingleRoute karzinka={cart}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
