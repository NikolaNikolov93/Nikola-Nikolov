//React imports
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//React iconst imports
import { RxHamburgerMenu } from "react-icons/rx";

//Styled components imports
import { ThemeProvider } from "styled-components";
import {
  AppContainer,
  AppDynamicSection,
  AppStaticSection,
  MainSection,
  SidebarButton,
} from "./App.styles";

//Theme imports
import { lightTheme, darkTheme } from "../styles/theme/theme";
import { useTheme } from "./lib/hooks/useTheme";

//Pages imports
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";

//Components imports
import Navigation from "./components/navigation/Navigation";
import Sidebar from "./components/sidebar/Sidebar";

/**
 *
 * @returns The App component that represents the whole page
 */
function App() {
  //Sets the state of the theme(Dark by default)
  const { isDarkTheme } = useTheme();

  //Sets the state for the mobile Sidebar(Closed by default)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //Toggles between the Sidebar states
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <MainSection>
          <AppStaticSection>
            <Navigation />
          </AppStaticSection>
          <AppDynamicSection>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </AppDynamicSection>
        </MainSection>
        <SidebarButton onClick={toggleSidebar} $isOpen={isSidebarOpen}>
          <RxHamburgerMenu />
        </SidebarButton>
        <Sidebar
          $isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        ></Sidebar>
      </AppContainer>
    </ThemeProvider>
  );
}
export default App;
