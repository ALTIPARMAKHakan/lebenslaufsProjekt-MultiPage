import './styles/styles.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import RootLayout from "./layouts/RootLayout";

import Beruf from './pages/Beruf'
import Datenschutz from "./pages/Datenschutz";
import Fahigkeit from "./pages/Fahigkeit";
import Hobbys from "./pages/Hobbys";
import Impressum from "./pages/Impressum";
import Studium from "./pages/Studium";
import NotFound from "./pages/Notfound"
import Summe from "./pages/Summe"
import Kontakt from "./pages/Kontakt"

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>          
      <Route index element={<Summe />} />
      <Route path="Beruf" element={<Beruf />} />
      <Route path="Studium" element={<Studium />} />
      <Route path="Fahigkeit" element={<Fahigkeit />} />
      <Route path="Hobbys" element={<Hobbys />} />
      <Route path="Impressum" element={<Impressum />} />
      <Route path="Datenschutz" element={<Datenschutz />} />
      <Route path ="Kontakt" element={<Kontakt />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function Cv(){
    return (
         <RouterProvider router={router} />
           );
}
export default Cv;