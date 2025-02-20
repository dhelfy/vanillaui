import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import { ComponentsPage } from "./pages/ComponentsPage/ComponentsPage";
import { ComponentPage } from "./pages/ComponentPage/ComponentPage";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/faq" element={<FaqPage />}/>
        <Route path="/components" element={<ComponentsPage />}/>
        <Route path="/components/:id" element={<ComponentPage />}/>
      </Route>
    </Routes>
  )
}
