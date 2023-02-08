import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageHeader from "./components/PageHeader/PageHeader";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:weekId" element={<Home />} />
        <Route path="/:weekId/:dateId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
