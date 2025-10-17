import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import BreadcrumCustom from "./components/BreadcrumCustom";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { TalentsPage } from "./pages/Talents";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <BreadcrumCustom />
        </header>
        <div className="flex flex-1 flex-col gap-4 min-h-screen bg-brown-500">
          <TalentsPage />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
