import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme/theme";
import styled from "styled-components";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";

type SideBaroButtonProps = {
  onClick: () => void;
  $isOpen: boolean;
};

function App() {
  const { isDarkTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
          ☰
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

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  /* Hide scrollbar for Webkit browsers */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for older Edge and IE */
  -ms-overflow-style: none;
`;
const MainSection = styled.section`
  max-width: 1440px;
  margin: auto;
  height: 100vh;
  display: flex;
  overflow-y: auto;
`;
const AppStaticSection = styled.section`
  position: sticky;
  top: 0;
  width: 30vw;
  overflow: hidden;
  padding: 2em;
  @media (max-width: 800px) {
    text-align: start;
    h1,
    h2,
    h4 {
      font-size: 1em;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const AppDynamicSection = styled.section`
  width: 70vw;
  padding: 2em;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;
const SidebarButton = styled.button<SideBaroButtonProps>`
  display: none;
  position: fixed;
  top: 1em;
  left: 1em;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 600px) {
    display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
    color: ${({ theme }) => theme.textPrimary};
  }
`;
