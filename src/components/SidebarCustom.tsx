import { sidebarConfig } from "@/config/sidebarConfig";
import { useState, type JSX } from "react";
import { Button } from "./ui/button";
import BreadcrumCustom from "./BreadcrumCustom";
import SearchInput from "./SearchInput";
import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

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
    [18, 82],
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
    <div className="h-screen flex w-full bg-gray-200">
      <div
        style={{ width: `${ratioSidebarAndContent[0]}%` }}
        className={`duration-400 h-screen p-4 ease-in-out`}
      >
        <div
          onMouseEnter={() => setRatioSidebarAndContent(standardRatio[1])}
          onMouseLeave={() => setRatioSidebarAndContent(standardRatio[0])}
          className="bg-white p-4 rounded-xl flex flex-col justify-between h-full"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <img
                src={"https://stg-admin.talentx.asia/favicon-96x96.png"}
                alt="logo"
                className="w-10 h-10"
              />
              <strong
                className={`${
                  standardRatio[1][0] === ratioSidebarAndContent[0]
                    ? "w-auto opacity-100"
                    : "w-0 opacity-0"
                } duration-400 justify-start text-lg text-start ease-in-out overflow-hidden whitespace-nowrap transition-all`}
              >
                TalentX
              </strong>
            </div>
            {sidebarConfig.map((item) => (
              <Button
                key={item.key}
                className="flex justify-start items-center rounded-sm hover:bg-violet-600 hover:text-white duration-200"
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
          <div className=" flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Settings className="w-6 h-6" />
              <strong
                className={`${
                  standardRatio[1][0] === ratioSidebarAndContent[0]
                    ? "w-auto opacity-100"
                    : "w-0 opacity-0"
                } duration-400 justify-start text-lg text-start ease-in-out overflow-hidden whitespace-nowrap transition-all`}
              >
                TalentX
              </strong>
            </div>
            <Separator orientation="horizontal" />
            <div className="flex items-center justify-between gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>TL</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <strong
                  className={`${
                    standardRatio[1][0] === ratioSidebarAndContent[0]
                      ? "w-auto opacity-100"
                      : "w-0 opacity-0"
                  } duration-400 text-sm text-gray-600 justify-start text-start ease-in-out overflow-hidden whitespace-nowrap transition-all`}
                >
                  TalentX Admin
                </strong>
                <span
                  className={`${
                    standardRatio[1][0] === ratioSidebarAndContent[0]
                      ? "w-auto opacity-100"
                      : "w-0 opacity-0"
                  } duration-400 text-sm text-muted-foreground justify-start text-start ease-in-out overflow-hidden whitespace-nowrap transition-all`}
                >
                  talentx@talentx.talentx
                </span>
              </div>
              <Button>
                <LogOut
                  className={`${
                    standardRatio[1][0] === ratioSidebarAndContent[0]
                      ? "w-auto opacity-100"
                      : "w-0 opacity-0"
                  } duration-400 text-sm text-gray-600 justify-start text-start ease-in-out overflow-hidden whitespace-nowrap transition-all`}
                />
              </Button>
            </div>
          </div>
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
            <div className="flex-1 overflow-y-auto">{page}</div>
          </>
        </SidebarContent>
      </div>
    </div>
  );
}

const SidebarContent = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="bg-white rounded-xl mr-4 overflow-hidden h-full flex flex-col">
      {children}
    </div>
  );
};

export default SidebarCustom;
