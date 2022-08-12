import Home from "@/presentation/pages/home/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router