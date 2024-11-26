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
import Certificate from "./pages/certificate/Certificate";

//React query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./pages/404/NotFound";
import { useSwipeable } from "react-swipeable";

/**
 *
 * @returns The App component that represents the whole page
 */
function App() {
  //React Queerry Client
  const queryClient = new QueryClient();

  //Sets the state of the theme(Dark by default)
  const { isDarkTheme } = useTheme();

  //Sets the state for the mobile Sidebar(Closed by default)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //Toggles between the Sidebar states
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //Handle sidebar state on mobile devices
  const swipeHandlers = useSwipeable({
    onTap: () => {
      if (isSidebarOpen) toggleSidebar(); // Close sidebar on dynamic part Tap
    },
    preventScrollOnSwipe: true, // Prevent scrolling while swiping
  });

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <MainSection>
            <AppStaticSection>
              <Navigation />
            </AppStaticSection>
            <AppDynamicSection {...swipeHandlers}>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:name/:id" element={<Certificate />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<PageNotFound />}></Route>
              </Routes>
            </AppDynamicSection>
          </MainSection>
          <SidebarButton
            onClick={toggleSidebar}
            $isOpen={isSidebarOpen}
            aria-label="hamburger-menu"
          >
            <RxHamburgerMenu />
          </SidebarButton>
          <Sidebar
            $isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          ></Sidebar>
        </AppContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default App;
