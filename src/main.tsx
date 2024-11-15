//React imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Global styles and resets
import "./index.css";

//App import
import App from "./App.tsx";

//Theme context import
import { ThemeContextProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </StrictMode>
  </BrowserRouter>
);
