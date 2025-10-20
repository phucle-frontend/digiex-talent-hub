import { TabCustom } from "../components/TabCustom";
import {
  CircleX,
  Copy,
  FileDown,
  ListFilter,
  SquarePlus,
  SearchIcon,
  CircleCheck,
  CircleMinus,
  PanelRight,
} from "lucide-react";
import { useState } from "react";
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
import { defaultFilters, filterFields } from "@/config/filterConfig";
import { CollapsibleFilterField } from "@/components/CollapsibleFilterField";
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
import BadgeCustom from "@/components/BadgeCustom";
import { handleFilterTalents } from "@/lib/common";

const SkillsDisplay = ({ skills }: { skills: string[] | null }) => {
  if (!skills || skills.length === 0) return <span>-</span>;

  const displaySkills = skills.slice(0, 2);
  const remainingCount = skills.length - 2;

  return (
    <div className="flex items-center gap-1">
      {displaySkills.map((skill, index) => (
        <BadgeCustom
          key={index}
          title={skill}
          color="green"
          condition={true}
          className="text-xs"
        />
      ))}
      {remainingCount > 0 && (
        <BadgeCustom
          title={`+${remainingCount}`}
          color="gray"
          condition={false}
          className="text-xs"
        />
      )}
    </div>
  );
};

const TalentsTable = ({
  search,
  filterValues,
}: {
  search: string;
  filterValues: Record<string, string[]>;
}) => {
  return (
    <Table className="max-w-[600px]">
      <TableHeader className={`bg-gray-50`}>
        <TableRow>
          <TableHead className="w-[140px] text-start">Name</TableHead>
          <TableHead className="w-[50px] text-start">Level</TableHead>
          <TableHead className="w-[80px] text-start">Skills</TableHead>
          <TableHead className="w-[40px] text-start">YoE</TableHead>
          <TableHead className="w-[80px] text-start">Availability</TableHead>
          <TableHead className="w-[80px] text-start">
            Profile Feedback
          </TableHead>
          <TableHead className="w-[70px] text-start">Partner</TableHead>
          <TableHead className="w-[70px] text-start">Background</TableHead>
          <TableHead className="w-[70px] text-start">Technical</TableHead>
          <TableHead className="w-[70px] text-start">Internal</TableHead>
          <TableHead className="w-[40px] text-start">Hired</TableHead>
          <TableHead className="w-[80px] text-start">
            Verified Profile
          </TableHead>
          <TableHead className="w-[80px] text-start">Created Date</TableHead>
          <TableHead className="w-[80px] text-start">Updated</TableHead>
          <TableHead className="w-[80px] text-start">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {handleFilterTalents({ search, filterValues }).map((talent) => (
          <TableRow key={talent.name.id}>
            <TableCell className="font-medium text-start w-[140px]">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={talent.name.avatar} />
                  <AvatarFallback>{talent.name.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-semibold truncate">
                    {talent.name.name}
                  </span>
                  <span className="text-xs font-thin text-muted-foreground truncate">
                    {talent.name.email}
                  </span>
                </div>
                <ButtonIcon icon={<Copy />} />
              </div>
            </TableCell>
            <TableCell className="text-start w-[50px]">
              <span className="truncate block">Level {talent.talentLevel}</span>
            </TableCell>
            <TableCell className="text-start w-[80px]">
              <SkillsDisplay skills={talent.skills} />
            </TableCell>
            <TableCell className="text-start w-[40px]">
              <span className="truncate block">
                {talent.yoe
                  ? `${talent.yoe} Year${talent.yoe > 1 ? "s" : ""}`
                  : "-"}
              </span>
            </TableCell>
            <TableCell className="text-start w-[80px]">
              <BadgeCustom
                title={talent.availability}
                color={talent.availability === "Available" ? "green" : "gray"}
                condition={true}
                className="text-xs"
              />
            </TableCell>
            <TableCell className="text-start w-[80px]">
              {talent.profileFeedback ? (
                <BadgeCustom
                  title={talent.profileFeedback}
                  color={
                    talent.profileFeedback === "Very Good"
                      ? "green"
                      : talent.profileFeedback === "Good"
                      ? "blue"
                      : "amber"
                  }
                  condition={true}
                  className="text-xs"
                />
              ) : (
                "-"
              )}
            </TableCell>
            <TableCell className="text-start w-[70px]">
              <span className="truncate block">{talent.partner || "-"}</span>
            </TableCell>
            <TableCell className="text-start w-[70px]">
              {talent.background ? (
                <BadgeCustom
                  title={talent.background}
                  color={
                    talent.background === "Very Good"
                      ? "green"
                      : talent.background === "Good"
                      ? "blue"
                      : "amber"
                  }
                  condition={true}
                  className="text-xs"
                />
              ) : (
                "-"
              )}
            </TableCell>
            <TableCell className="text-start w-[70px]">
              {talent.technical ? (
                <BadgeCustom
                  title={talent.technical}
                  color={
                    talent.technical === "Very Good"
                      ? "green"
                      : talent.technical === "Good"
                      ? "blue"
                      : "amber"
                  }
                  condition={true}
                  className="text-xs"
                />
              ) : (
                "-"
              )}
            </TableCell>
            <TableCell className="text-start w-[70px]">
              <span className="truncate block">{talent.internal || "-"}</span>
            </TableCell>
            <TableCell className="text-start w-[40px]">
              <div className="flex justify-center">
                {talent.isHired ? (
                  <CircleCheck className="w-4 h-4 text-green-600" />
                ) : (
                  <CircleMinus className="w-4 h-4 text-red-600" />
                )}
              </div>
            </TableCell>
            <TableCell className="text-start w-[80px]">
              <BadgeCustom
                title={talent.isVerifiedProfile ? "Verified" : "Unverified"}
                color={talent.isVerifiedProfile ? "green" : "red"}
                condition={true}
                className="text-xs"
              />
            </TableCell>
            <TableCell className="text-start w-[80px]">
              <span className="truncate block text-xs">
                {talent.createdDate
                  .toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                  .replace(",", "")}
              </span>
            </TableCell>
            <TableCell className="text-start w-[80px]">
              <span className="truncate block text-xs">
                {talent.updatedDate
                  ? talent.updatedDate
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                      .replace(",", "")
                  : "-"}
              </span>
            </TableCell>
            <TableCell className="text-start w-[80px]">
              <span className="truncate block text-xs">{talent.status}</span>
            </TableCell>
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

function TalentsContent({ searchValue }: { searchValue: string }) {
  const [controlledValues, setControlledValues] =
    useState<Record<string, string[]>>(defaultFilters);
  const [appliedValues, setAppliedValues] =
    useState<Record<string, string[]>>(defaultFilters);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isVerticalFilterOpen, setIsVerticalFilterOpen] = useState(false);

  const getActiveFilterCount = () => {
    let count = 0;
    if (searchValue) count++;
    Object.values(appliedValues).forEach((values) => {
      if (values && values.length > 0) count++;
    });
    return count;
  };

  return (
    <div className="w-full flex-1 h-full gap-4 flex overflow-hidden">
      {isVerticalFilterOpen && (
        <div className="w-80 flex-shrink-0 border-1 rounded-md border-gray-200 p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Filter</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setControlledValues(defaultFilters);
                  setAppliedValues(defaultFilters);
                  setHasSearched(false);
                }}
                className="text-violet-600 hover:text-violet-700"
              >
                <CircleX className="w-4 h-4" />
                Clear All
              </Button>
            </div>
            <div className="space-y-4">
              {filterFields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <CollapsibleFilterField
                    label={field.label}
                    selectedValues={controlledValues?.[field.key] ?? []}
                    options={
                      Array.isArray(field.options)
                        ? field.options.map(String)
                        : []
                    }
                    onSelectionChange={(values: string[]) => {
                      const newValues = {
                        ...controlledValues,
                        [field.key]: values,
                      };
                      setControlledValues(newValues);
                    }}
                    type={field.type}
                    value={field.value}
                    from={field.from}
                    to={field.to}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <Button
                onClick={() => {
                  setAppliedValues(controlledValues);
                  setHasSearched(true);
                  setIsVerticalFilterOpen(false);
                }}
                className="bg-violet-600 hover:bg-violet-700 text-white"
              >
                <SearchIcon className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsVerticalFilterOpen(false)}
                className="border-gray-200"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex-1 ${
          isVerticalFilterOpen ? "max-w-[72rem]" : "w-full"
        } border border-gray-200 rounded-lg bg-white min-w-0 overflow-hidden flex flex-col`}
      >
        <div className="flex justify-between items-center">
          {hasSearched && (
            <div className="flex items-center gap-2 w-full justify-end">
              <Button
                className="flex gap-2 items-center text-violet-700 border-none bg-transparent shadow-none"
                variant={"outline"}
                onClick={() => {
                  setControlledValues(defaultFilters);
                  setAppliedValues(defaultFilters);
                  setHasSearched(false);
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
                  setIsVerticalFilterOpen(true);
                }}
              >
                <ListFilter size={16} />
                Filter more
              </Button>
            </div>
          )}
        </div>
        <div className="flex-1 overflow-hidden">
          {handleFilterTalents({
            search: searchValue,
            filterValues: appliedValues,
          })?.length > 0 ? (
            <div className="h-full flex flex-col ">
              <div className="items-center flex justify-between p-3 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Button
                      variant={"outline"}
                      className={`${
                        isVerticalFilterOpen ? "rotate-180 " : " "
                      } border-gray-200`}
                      onClick={() => setIsVerticalFilterOpen((v) => !v)}
                    >
                      {isVerticalFilterOpen ? (
                        <PanelRight size={16} />
                      ) : (
                        <ListFilter size={16} />
                      )}
                    </Button>
                    {getActiveFilterCount() > 0 && !isVerticalFilterOpen && (
                      <BadgeCustom
                        title={`${getActiveFilterCount()}`}
                        color="indigo"
                        condition={false}
                        className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs rounded-full px-2 bg-violet-100 border-1 border-violet-600 text-violet-700 flex items-center justify-center"
                      />
                    )}
                  </div>
                  <strong className="font-bold text-lg">Talent members</strong>
                  <Badge
                    variant={"outline"}
                    className="border-violet-200 rounded-full py-0 bg-violet-100 text-violet-700"
                  >
                    {
                      handleFilterTalents({
                        search: searchValue,
                        filterValues: appliedValues,
                      })?.length
                    }{" "}
                    user
                    {handleFilterTalents({
                      search: searchValue,
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
              <div className="flex-1 overflow-x-auto">
                <TalentsTable
                  search={searchValue}
                  filterValues={appliedValues}
                />
              </div>
            </div>
          ) : (
            <TalentNotFound
              clearSearch={() => {
                // Search is now controlled by App.tsx, so we don't need to clear it here
              }}
            />
          )}

          {handleFilterTalents({
            search: searchValue,
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
                    <PaginationNext
                      href="#"
                      className="border-1 border-gray-200"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillsContent() {
  return <></>;
}

function TasksContent() {
  return <></>;
}

export function TalentsPage({ searchValue }: { searchValue: string }) {
  const tabItems = [
    {
      id: "talents",
      label: "Talents",
      content: <TalentsContent searchValue={searchValue} />,
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
      <div className="space-y-4 h-full max-w-screen-2xl ">
        <TalentsContent searchValue={searchValue} />
      </div>
    </div>
  );
}
