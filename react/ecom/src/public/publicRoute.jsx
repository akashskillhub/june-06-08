import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderSuccess from "./pages/OrderSuccess";
import Register from "./pages/Register";

export const publicRoutes = [
    { show: true, path: "/", compo: <Home />, label: "Home" },
    { show: true, path: "/cart", compo: <Cart />, label: "cart" },
    { show: false, path: "/product/:id", compo: <Details />, label: "details" },
    { show: false, path: "/checkout", compo: <Checkout />, label: "checkout" },
    { show: false, path: "/success", compo: <OrderSuccess />, label: "success" },
    { show: true, path: "/login", compo: <Login />, label: "login" },
    { show: true, path: "/register", compo: <Register />, label: "register" },
]