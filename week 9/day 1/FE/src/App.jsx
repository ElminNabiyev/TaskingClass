import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import Add from "./pages/Add";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import Basket from './pages/Basket';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/basket' element={<Basket />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/update/:id" element={<Update />} />
          <Route path="/admin/add" element={<Add />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
