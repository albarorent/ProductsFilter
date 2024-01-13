import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import DrinkInfo from "./pages/DrinkInfo";
import Layaout from "./Layouts/Layaout";
import { CategoryProvider } from "./context/categoryContext";
function App() {
  return (
    <>
      <CategoryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layaout />}>
                <Route index element={<Products />} />
                <Route path="/drink/:id" element={<DrinkInfo />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </CategoryProvider>
    </>
  );
}

export default App;
