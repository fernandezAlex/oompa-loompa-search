import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainView } from "./pages/MainView";
import { DetailView } from "./pages/DetailView";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainView />} />
        {/* This path is to see the project in github pages deployed */}
        <Route path="/oompa-loompa-search" element={<MainView />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}

export default App;
