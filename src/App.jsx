import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404"
export default function App() {
  return (
    <div className="col-12 App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
