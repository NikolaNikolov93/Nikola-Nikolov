import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme/theme";
import styled from "styled-components";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";

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
  padding: 4em 2em;
`;
const AppDynamicSection = styled.section`
  width: 70vw;
  padding: 4em 2em;
`;
function App() {
  const { isDarkTheme } = useTheme();

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
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
