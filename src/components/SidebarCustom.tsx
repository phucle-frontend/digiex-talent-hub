import { sidebarConfig } from "@/config/sidebarConfig";
import { useState, type JSX } from "react";
import { Button } from "./ui/button";
import BreadcrumCustom from "./BreadcrumCustom";
import SearchInput from "./SearchInput";

function SidebarCustom({
  page,
  searchValue,
  setSearchValue,
}: {
  page: JSX.Element;
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}) {
  const standardRatio = [
    [8, 92],
    [16, 84],
  ];
  const [ratioSidebarAndContent, setRatioSidebarAndContent] = useState<
    number[]
  >(standardRatio[0]);
  console.log(
    "cehck widht 1",
    ratioSidebarAndContent === standardRatio[1],
    ratioSidebarAndContent,
    standardRatio[1]
  );
  return (
    <div className="h-screen flex w-full bg-gray-100">
      <div
        style={{ width: `${ratioSidebarAndContent[0]}%` }}
        className={`duration-400 h-screen p-4 ease-in-out`}
      >
        <div
          onMouseEnter={() => setRatioSidebarAndContent(standardRatio[1])}
          onMouseLeave={() => setRatioSidebarAndContent(standardRatio[0])}
          className="bg-white rounded-lg flex flex-col h-full"
        >
            <img  src={'https://stg-admin.talentx.asia/favicon-96x96.png'} alt="logo" className="w-10 h-10" />
          {sidebarConfig.map((item) => (
            <Button
              key={item.key}
              className="flex justify-start items-center rounded-none hover:opacity-90"
              variant={"ghost"}
            >
              {item.icon}
              <span
                className={`${
                  standardRatio[1][0] === ratioSidebarAndContent[0]
                    ? "w-auto opacity-100"
                    : "w-0 opacity-0"
                } duration-400 justify-start text-start ease-in-out overflow-hidden whitespace-nowrap transition-all`}
              >
                {item.title}
              </span>
            </Button>
          ))}
        </div>
      </div>
      <div
        style={{ width: `${ratioSidebarAndContent[1]}%` }}
        className="flex duration-400 h-screen py-4 ease-in-out flex-col"
      >
        <SidebarContent>
          <>
            <header className="flex shrink-0 items-center justify-between gap-2 mr-4 px-4 py-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <BreadcrumCustom />
              <SearchInput
                placeholder="Search by Email/Name"
                value={searchValue}
                onChange={setSearchValue}
              />
            </header>
            <div className="flex-1 overflow-y-auto">
              {page}
            </div>
          </>
        </SidebarContent>
      </div>
    </div>
  );
}

const SidebarContent = ({ children }: { children: JSX.Element }) => {
  return <div className="bg-white rounded-md mr-4 overflow-hidden h-full flex flex-col">{children}</div>;
};

export default SidebarCustom;
