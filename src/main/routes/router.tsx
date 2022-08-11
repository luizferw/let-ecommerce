import { BrowserRouter, Routes, Route } from "react-router-dom"
import { makeHome } from "@/main/factories/pages/home-factory"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ makeHome() } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router