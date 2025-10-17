import SearchInput from "@/components/SearchInput";
import { TabCustom } from "../components/TabCustom";
import { FilterSection } from "../components/FilterSection";
import {
  CircleX,
  Cloud,
  Copy,
  Eye,
  FileDown,
  ListFilter,
  SquarePlus,
} from "lucide-react";
import {  useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { defaultFilters } from "@/config/filterConfig";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ButtonIcon from "@/components/ButtonIcon";
import { SidebarTrigger } from "@/components/ui/sidebar";
import BadgeCustom from "@/components/BadgeCustom";
import { handleFilterTalents } from "@/lib/common";

const TalentsTable = ({
  isExpanded,
  search,
  filterValues,
}: {
  isExpanded: boolean;
  search: string;
  filterValues: Record<string, string>;
}) => {
  return (
    <Table className="w-full">
      <TableHeader className={`bg-gray-50`}>
        <TableRow>
          <TableHead className="w-[100px] text-start">Name</TableHead>
          <TableHead className="text-start">Nationality</TableHead>
          <TableHead className="text-start">Phone Number</TableHead>
          <TableHead className="text-start">Type</TableHead>
          <TableHead className="text-start">Total Epxs</TableHead>
          <TableHead className="text-start">Talent Level</TableHead>
          {isExpanded && (
            <>
              <TableHead className="text-start">Skills</TableHead>
              <TableHead className="text-start">CV</TableHead>
              <TableHead className="text-start">Background Interview</TableHead>
              <TableHead className="text-start">Technical Interview</TableHead>
              <TableHead className="text-start">Status</TableHead>
              <TableHead className="text-start">Hired</TableHead>
              <TableHead className="text-start">Profile</TableHead>
              <TableHead className="text-start">Created</TableHead>
              <TableHead className="text-start">Updated</TableHead>
              <TableHead className="text-start">Source</TableHead>
            </>
          )}
          {!isExpanded && <TableHead className="text-start"></TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {handleFilterTalents({ search, filterValues }).map((talent) => (
          <TableRow key={talent.name.id}>
            <TableCell className="font-medium text-start flex h-full gap-2">
              <Avatar>
                <AvatarImage src={talent.name.avatar} />
                <AvatarFallback>{talent.name.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1 flex-start justify-center">
                <span className="font-semibold">{talent.name.name}</span>
                <span className="text-xs font-thin text-muted-foreground">
                  {talent.name.email}
                </span>
              </div>
              <ButtonIcon icon={<Copy />} />
            </TableCell>
            <TableCell className="text-start">{talent.nationality}</TableCell>
            <TableCell className="text-start lg:max-w-48 gap-2 justify-between">
              <span className="flex-1">{talent.phoneNumber}</span>
              <ButtonIcon icon={<Copy />} />
            </TableCell>
            <TableCell className="text-start ">
              <BadgeCustom
                title={talent.type}
                color={talent.type === "ODC" ? "green" : "blue"}
                condition={true}
              />
            </TableCell>
            <TableCell className="text-start ">
              {talent.totalExps} Year{talent.totalExps > 1 ? "s" : ""}
            </TableCell>
            <TableCell className="text-start ">
              Level {talent.talentLevel}
            </TableCell>
            {!isExpanded && (
              <TableCell className="text-start flex items-center justify-center">
                <ButtonIcon icon={<Eye />} />
                <ButtonIcon icon={<Cloud />} />
              </TableCell>
            )}
            {isExpanded && (
              <>
                <TableCell className="text-start ">{talent.skills}</TableCell>
                <TableCell className="text-start ">
                  <BadgeCustom
                    title={talent.isCvUploaded ? "Uploaded" : "Unuploaded"}
                    color={talent.isCvUploaded ? "green" : "red"}
                    condition={true}
                  />
                </TableCell>
                <TableCell className="text-start ">
                  {talent.backgroundInterview.score} out of{" "}
                  {talent.backgroundInterview.cappedScore}
                  {" | "}
                  {+talent.backgroundInterview.score /
                    +talent.backgroundInterview.cappedScore >=
                  0.8
                    ? "Good"
                    : "Bad"}
                </TableCell>
                <TableCell className="text-start ">
                  {talent.technicalInterview.score} out of{" "}
                  {talent.technicalInterview.cappedScore}
                  {" | "}
                  {+talent.technicalInterview.score /
                    +talent.technicalInterview.cappedScore >=
                  0.8
                    ? "Good"
                    : "Bad"}
                </TableCell>
                <TableCell className="text-start ">
                  <BadgeCustom
                    title={talent.status}
                    color={talent.status === "Available" ? "green" : "red"}
                    condition={true}
                  />
                </TableCell>
                <TableCell className="text-start ">
                  {talent.isHired ? 1 : 0}
                </TableCell>
                <TableCell className="text-start ">{talent.profile}</TableCell>
                <TableCell className="text-start ">
                  {talent.createdDate.toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell className="text-start ">
                  {talent.updatedDate.toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell className="text-start ">{talent.source}</TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TalentNotFound = ({ clearSearch }: { clearSearch: () => void }) => {
  return (
    <div className="flex flex-col h-full flex-1 gap-2 -mt-16 items-center justify-center">
      <strong className="text-lg font-bold">No Talents Found</strong>
      <p className="text-muted-foreground text-sm">
        Your search did not match any Talents. Please try again.
      </p>
      <div className="items-center flex gap-2 mt-4 justify-center">
        <Button
          className="border-gray-200"
          onClick={clearSearch}
          variant={"outline"}
        >
          Clear search
        </Button>
        <Button className="bg-violet-600 gap-2 flex items-center text-white">
          <SquarePlus />
          Add Talent
        </Button>
      </div>
    </div>
  );
};

function TalentsContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [controlledSearch, setControlledSearch] = useState<string>("");
  const [controlledValues, setControlledValues] =
    useState<Record<string, string>>(defaultFilters);
  const [appliedSearch, setAppliedSearch] = useState<string>("");
  const [appliedValues, setAppliedValues] =
    useState<Record<string, string>>(defaultFilters);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isClearing, setIsClearing] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);

  

  return (
    <div className="w-full flex-1 space-y- h-full">
      <div className="flex justify-between items-center">
        {!isFilterOpen && !hasSearched && (
          <>
            <SearchInput
              placeholder="Search by Email/Name"
              value={controlledSearch}
              onChange={(input) => {
                setControlledSearch(input);
                setAppliedSearch(input)
              }}
            />
            <Button
              className="flex gap-2 items-center border-gray-300 transition-all duration-500 ease-in-out"
              variant={"outline"}
              onClick={() => {
                setIsFilterOpen(true);
              }}
            >
              <ListFilter size={16} />
              Filters
            </Button>
          </>
        )}
        {!isFilterOpen && hasSearched && (
          <div className="flex items-center gap-2 w-full justify-end">
            <Button
              className="flex gap-2 items-center text-violet-700 border-none bg-transparent shadow-none"
              variant={"outline"}
              onClick={() => {
                setIsClearing(true);
                setControlledValues(defaultFilters);
                setControlledSearch("");
                setAppliedSearch("");
                setIsFilterOpen(true);
                setIsClear(true);
              }}
            >
              <CircleX />
              Clear Filter
            </Button>
            <Button
              className="flex gap-2 items-center border-gray-300"
              variant={"outline"}
              onClick={() => {
                setControlledValues(appliedValues);
                setControlledSearch(appliedSearch);
                setIsFilterOpen(true);
              }}
            >
              <ListFilter size={16} />
              Filter more
            </Button>
          </div>
        )}
      </div>

      <FilterSection
        isClear={isClear}
        isOpen={isFilterOpen}
        onClose={() => {
          setIsFilterOpen(false);
          if (isClearing) {
            setAppliedValues(defaultFilters);
            setAppliedSearch("");
            setHasSearched(false);
            setIsClearing(false);
          }
          if (isClear) setIsClear(false);
        }}
        values={controlledValues}
        onValuesChange={setControlledValues}
        searchValue={controlledSearch}
        onSearch={({ search, values }) => {
          setAppliedSearch(search);
          setAppliedValues(values);
          setHasSearched(true);
          setIsClearing(false);
          setIsFilterOpen(false);
          if (isClear) setIsClear(false);
        }}
      />

      {handleFilterTalents({
        search: appliedSearch,
        filterValues: appliedValues,
      })?.length > 0 ? (
        <div className="w-full  overflow-hidden border border-gray-200 rounded-lg">
          <div className="items-center flex justify-between p-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger
                className={`${isExpanded ? "rotate-180" : ""}`}
                onClick={() => setIsExpanded((v) => !v)}
              />
              <strong className="font-bold text-lg">Talent members</strong>
              <Badge
                variant={"outline"}
                className="border-violet-200 rounded-full py-0 bg-violet-100 text-violet-700"
              >
                {
                  handleFilterTalents({
                    search: appliedSearch,
                    filterValues: appliedValues,
                  })?.length
                }{" "}
                user
                {handleFilterTalents({
                  search: appliedSearch,
                  filterValues: appliedValues,
                })?.length > 1 && "s"}
              </Badge>
            </div>
            <div className="items-center flex gap-2">
              <Button
                className=" gap-2 flex items-center border-gray-200"
                variant={"outline"}
              >
                <FileDown />
                Export
              </Button>
              <Button className="bg-violet-600 gap-2 flex items-center text-white">
                <SquarePlus />
                Add Talent
              </Button>
            </div>
          </div>
          <TalentsTable
            isExpanded={isExpanded}
            search={appliedSearch}
            filterValues={appliedValues}
          />
        </div>
      ) : (
        <TalentNotFound
          clearSearch={() => {
            setControlledSearch("");
            setAppliedSearch("");
          }}
        />
      )}

      {handleFilterTalents({
        search: appliedSearch,
        filterValues: appliedValues,
      })?.length > 0 && (
        <div className="w-full mt-4 flex justify-center ">
          <Pagination>
            <PaginationContent className=" w-full justify-between flex">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="border-1 border-gray-200"
                ></PaginationPrevious>
              </PaginationItem>
              <div className="flex items-center justify-center">
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </div>
              <PaginationItem>
                <PaginationNext href="#" className="border-1 border-gray-200" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

function SkillsContent() {
  return <></>;
}

function TasksContent() {
  return <></>;
}

export function TalentsPage() {
  const tabItems = [
    {
      id: "talents",
      label: "Talents",
      content: <TalentsContent />,
    },
    {
      id: "skills",
      label: "Skills Configuration",
      content: <SkillsContent />,
    },
    {
      id: "tasks",
      label: "Tasks",
      content: <TasksContent />,
    },
  ];

  return (
    <div className="w-full h-full flex-1 space-y-12">
      <div className="space-y-4 h-full">
        <TabCustom items={tabItems} />
      </div>
    </div>
  );
}
