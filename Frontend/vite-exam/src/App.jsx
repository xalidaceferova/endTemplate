import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Companents/Home/Home"
import Detail from "./Companents/Detail/Detail"
import Add from "./Companents/Add/Add"
import Wishlist from "./Companents/Wishlist/Wishlist"
import Header from "./Companents/Header/Header"
import Footer from "./Companents/Footer/Footer"

function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/:id" element={<Detail />} />
   <Route path="/add" element={<Add />}/>
   <Route path="/wishlist" element={<Wishlist />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
