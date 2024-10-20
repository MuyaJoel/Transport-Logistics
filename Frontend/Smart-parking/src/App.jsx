import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./Layouts/NavBar";
import Layout from './Layouts/Layout'
import Home from "./pages/Home";
import MallPage from "./pages/MallPage";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/mall/:mallId" element={<MallPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
