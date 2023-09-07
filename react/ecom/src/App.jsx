import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { publicRoutes } from "./public/publicRoute"
import Navbar from "./share/Navbar"
import NotFound from "./public/pages/NotFound"
import Layout from "./admin/Layout"
import { adminRoutes } from "./admin/adminRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer
        theme="dark"
        position="bottom-left"
      />
      <Routes>
        <Route path="/" element={<> <Navbar /> <Outlet /> </>}>
          {
            publicRoutes.map(({ path, compo }) => <Route
              path={path}
              element={compo} />)
          }
        </Route>

        <Route path="/admin" element={<Layout />}>
          {
            adminRoutes.map(({ path, compo }) => path === "index"
              ? <Route index element={compo} />
              : <Route
                path={path}
                element={compo} />)
          }
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App