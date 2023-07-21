// for all the links for routes
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Header  } from "../Header";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Menu from "../../pages/Menu";
import Cart from "../../pages/Cart";
import PaymentSuccess from "../../pages/PaymentSuccess";


const Navigation = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/payment-success" element={<PaymentSuccess/>}/>


            </Routes>
        </BrowserRouter>
    )
}


export default Navigation;