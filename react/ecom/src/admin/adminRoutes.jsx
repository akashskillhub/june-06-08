import { MdBarChart, MdPeople, MdShoppingBag, MdSpaceDashboard } from "react-icons/md";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Users from "./pages/Users";

export const adminRoutes = [
    { icon: <MdSpaceDashboard />, show: true, path: "index", compo: <Dashboard />, label: "Dashboard" },
    { icon: <MdPeople />, show: true, path: "users", compo: <Users />, label: "Users" },
    { icon: <MdShoppingBag />, show: true, path: "orders", compo: <Orders />, label: "Orders" },
    { icon: <MdBarChart />, show: true, path: "products", compo: <Products />, label: "products" },
]
