import "./App.css";
import { TalentsPage } from "./pages/Talents";
import { useState } from "react";
import SidebarCustom from "./components/SidebarCustom";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SidebarCustom setSearchValue={setSearchValue}  page={<TalentsPage searchValue={searchValue} />}  />
  );
}

export default App;
