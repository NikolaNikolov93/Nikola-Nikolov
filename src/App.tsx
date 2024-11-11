import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme/theme";
import styled from "styled-components";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import { useTheme } from "./context/ThemeContext";
import MainPageContainer from "./components/mainPageCointainer/mainPageCointainer";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  min-height: 100vh;
`;

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <Navigation />
        <MainPageContainer>
          <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </MainPageContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
