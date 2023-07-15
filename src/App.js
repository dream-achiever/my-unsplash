import "./App.css";
import Header from "./components/header/Header.js";

function App() {
  const isMobileDevice = useMediaQuery({ query: "(max-width: 450px)" });
  const isTabletDevice = useMediaQuery({
    query: "(min-width: 451px) and (max-width: 1200px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1201px) and (max-width: 1600px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1601px)" });

  return (
    <div className="App">
      <Header className="App-header"></Header>
    </div>
  );
}

export default App;
