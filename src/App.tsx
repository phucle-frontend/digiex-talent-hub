import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import BreadcrumCustom from "./components/BreadcrumCustom";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { TalentsPage } from "./pages/Talents";
import SearchInput from "./components/SearchInput";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
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
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
