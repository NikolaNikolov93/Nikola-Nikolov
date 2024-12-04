//React imports
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Global styles and resets
import "./index.css";

//App import
import App from "./App.tsx";
import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";

//Theme context import

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
);
