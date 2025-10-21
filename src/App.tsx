import "./App.css";
import BreadcrumCustom from "./components/BreadcrumCustom";
import { TalentsPage } from "./pages/Talents";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import { sidebarConfig } from "./config/sidebarConfig";
import { Button } from "./components/ui/button";

function App() {
  const standardRatio = [
    [8,92],
    [16,84]
  ]
  const [searchValue, setSearchValue] = useState<string>("");
const [ratioSidebarAndContent, setRatioSidebarandContent] = useState<number[]>(standardRatio[0])
console.log('cehck widht 1', ratioSidebarAndContent === standardRatio[1], ratioSidebarAndContent, standardRatio[1])
  return (
    <div className=" flex w-full">
      <div onMouseEnter={() => setRatioSidebarandContent(standardRatio[1])} onMouseLeave={() => setRatioSidebarandContent(standardRatio[0])} style={{width: `${ratioSidebarAndContent[0]}%`}} className={`min-h-screen duration-400 ease-in-out flex flex-col`}>
       {sidebarConfig.map(item => (
        <Button key={item.key} className="flex justify-start items-center rounded-none hover:opacity-90" variant={'ghost'} >
          {item.icon}
          <span className={`${standardRatio[1][0] === ratioSidebarAndContent[0] ? 'visible': 'hidden'} duration-400 justify-start text-start ease-in-out`}>
          { item.title}
          </span>
        </Button>
       ))}
      </div>
      <div style={{width: `${ratioSidebarAndContent[1]}%`}} className={`flex duration-400 ease-in-out bg-green-300 flex-col`}>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <BreadcrumCustom />
          <SearchInput
            placeholder="Search by Email/Name"
            value={searchValue}
            onChange={setSearchValue}
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 min-h-screen px-4 bg-brown-500">
          <TalentsPage searchValue={searchValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
