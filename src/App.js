import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageHeader from "./components/PageHeader/PageHeader";
import "./App.scss";
import EditDate from "./components/EditDate/EditDate";
import AddDate from "./components/AddDate/AddDate";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:weekId" element={<Home />} />
        <Route path="/:weekId/:dateId" element={<Home />} />
        <Route path="/editdate/:dateId" element={<EditDate />} />
        <Route path="/newdate/:weekId" element={<AddDate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
