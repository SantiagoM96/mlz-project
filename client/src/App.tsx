import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Municipio from "./components/Municipio"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/municipio" element={<Municipio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App