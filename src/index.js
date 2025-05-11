import React from "react"; // Importon librarinë React për të krijuar komponentët.
import ReactDOM from "react-dom"; // Importon ReactDOM për të manipuluar DOM-in e aplikacionit.
import { BrowserRouter } from "react-router-dom"; // Importon `BrowserRouter` për të mundësuar navigimin me rruge (routes) në aplikacion.
import App from "./App"; // Importon komponentin kryesor të aplikacionit `App`.
import "./index.css"; // Importon stilizimet globale për aplikacionin nga skedari `index.css`.

ReactDOM.render(
  <React.StrictMode> {/* Aktivizon modalitetin strict të React për të ndihmuar në kapjen e gabimeve dhe praktikat e këqija në zhvillim. */}
    <BrowserRouter> {/* Mundëson navigimin me `react-router-dom`, duke i lejuar përdoruesit të lëvizin mes faqeve të ndryshme. */}
      <App /> {/* Rrënja e aplikacionit ku do të shfaqen të gjitha komponentët dhe rruget e tij. */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") // Ngarkon aplikacionin brenda një elementi HTML me id="root".
);
