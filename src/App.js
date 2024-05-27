import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart"
import Shipping from "./components/cart/Shipping"
import ConfirmOrder from "./components/cart/ConfirmOrder"
import PaymentSuccess from "./components/cart/PaymentSuccess"
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders.jsx";
import About from "./components/about/About.jsx";
import NotFound from "./components/layout/NotFound.jsx";
import toast,{Toaster} from "react-hot-toast"
import {ProtectedRoute} from "protected-route-react";
import Contact from "../src/components/contact/contact.jsx"



import "./styles/header.scss"
import "./styles/app.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"
import "./styles/footer.scss"
// import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import "./styles/paymentSuccess.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/orderDetails.scss"
import "./styles/dashboard.scss"
import "./styles/about.scss"
import { useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user.js";






function App() {

  const dispatch = useDispatch();
  const {error,message, isAuthenticated,user} = useSelector(state=>state.auth)

  useEffect(() =>{
    dispatch(loadUser());
  }, [dispatch])


  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({
        type:"clearError",
      })
    }

    if(message){
      toast.success(message);
      dispatch({
        type:"clearMessage",
      })
    }
  },[dispatch,error,message]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>



        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/contact" element={<Contact/>}/> */}
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/paymentsuccess" element={<PaymentSuccess/>}/>

        
        <Route exact path="/login" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
            <Login/>
          </ProtectedRoute>
        } />
       

       <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
       <Route exact path="/me" element={<Profile />} />
       <Route exact path ="/contact" element={<Contact/>}/>
       <Route exact path="/shipping" element={<Shipping/>}/>
        <Route exact path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route exact path="/myorders" element={<MyOrders/>} />
        <Route exact path="/order/:id" element={<OrderDetails/>} />
       </Route>
       
       
       
        
       
       <Route 
        element={
        <ProtectedRoute 
        isAuthenticated={isAuthenticated}
         adminRoute={true}
         isAdmin={user && user.role==="admin"}
         redirectAdmin="/me"
         />
         }
         >
       <Route exact path="/admin/dashboard" element={<Dashboard/>} />
        <Route exact path="/admin/users" element={<Users/>} />
        <Route exact path="/admin/orders" element={<Orders/>}  />
       </Route>
        


        <Route path="*" element={<NotFound/>}/>


      </Routes>

      <Footer/>
      <Toaster/>
    </Router>

  );

}

export default App;
