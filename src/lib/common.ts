import { SKILL_OPTIONS, talents } from "@/data/talents";
import { parseISO, isWithinInterval, isValid, startOfDay, endOfDay } from "date-fns";

export const handleFilterTalents = ({
  search,
  filterValues,
}: {
  search: string;
  filterValues: Record<string, string[]>;
}) => {
  return talents
    .filter((talent) => {
      const queryInput = search.trim().toLowerCase();
      if (!queryInput) return true;
      return (
        talent.name.name.toLowerCase().includes(queryInput) ||
        talent.name.email.toLowerCase().includes(queryInput) ||
        talent.phoneNumber.toLowerCase().includes(queryInput) ||
        talent.nationality.toLowerCase().includes(queryInput) ||
        (talent.skills &&
          talent.skills.some((skill) => skill.name.toLowerCase().includes(queryInput)))
      );
    })
    .filter((talent) => {

      if (filterValues.skills && filterValues.skills.length ) {
        const talentSkills = talent.skills || [];
        const hasMatchingSkill = filterValues.skills.some((filterSkill) => {
          const parts = filterSkill.split("|").map((p) => p.trim());
          const filterName = parts[0]?.toLowerCase();
          const filterYoe = parts[1] ? Number(parts[1]) : undefined;
          const filterCompetency = parts[2]?.toLowerCase();

          return talentSkills.some((s) => {
            const checkName = filterName
              ? s.name.toLowerCase() === filterName
              : true;
            const checkYoE =
              typeof filterYoe === "number" && !Number.isNaN(filterYoe)
                ? s.yoe === filterYoe
                : true;
            const checkCompetency = filterCompetency
              ? s.competency.toLowerCase() === filterCompetency
              : true;
            return checkName && checkYoE && checkCompetency;
          });
        });
        if (!hasMatchingSkill) return false;
      }

      if (filterValues.position && filterValues.position.length) {
        if (!filterValues.position.includes(talent.position)) return false;
      }

      if (filterValues.totalExps && filterValues.totalExps.length) {
        const years = talent.totalExps;
        const matchesRange = filterValues.totalExps.some((range) => {
          if (range.includes("-")) {
            const [from, to] = range.split("-").map(Number);
            return years >= from && years <= to;
          }
          return false;
        });
        if (!matchesRange) return false;
      }

      if (filterValues.talentLevel && filterValues.talentLevel.length) {
        if (!filterValues.talentLevel.includes(talent.talentLevel.toString())) return false;
      }

      if (filterValues.partners && filterValues.partners.length) {
        if (!filterValues.partners.includes(talent.partner || "")) return false;
      }

      if (filterValues.availability && filterValues.availability.length) {
        if (!filterValues.availability.includes(talent.availability)) return false;
      }

      if (filterValues.verifiedProfile && filterValues.verifiedProfile.length) {
        const isVerified = filterValues.verifiedProfile.includes("Verified");
        if (isVerified && !talent.isVerifiedProfile) return false;
        if (!isVerified && talent.isVerifiedProfile) return false;
      }

      if (filterValues.language && filterValues.language.length) {
        const talentLanguages = talent.language || [];
        const hasMatchingLanguage = filterValues.language.some((lang) =>
          talentLanguages.includes(lang)
        );
        if (!hasMatchingLanguage) return false;
      }

      if (
        filterValues.talentStatus &&
        filterValues.talentStatus.length
      ) {
        if (
          !filterValues.talentStatus.includes(talent.status)
        )
          return false;
      }

      if (filterValues.profileStatus && filterValues.profileStatus.length) {
        console.log('cehck profile status', filterValues.profileStatus, talent.profileStatus)

        if (
          !filterValues.profileStatus
            .includes(talent.profileStatus|| "")
        )
          return false;
      }

      if (filterValues.internal && filterValues.internal.length) {
        if (!filterValues.internal.includes(talent.internal || "")) return false;
      }

      if (filterValues.createdDate && filterValues.createdDate.length) {
        const dateRange = filterValues.createdDate[0];
        if (dateRange && dateRange.includes("-")) {
          const dateParts = dateRange.split("-");
          if (dateParts.length === 6) {
            const fromStr = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
            const toStr = `${dateParts[3]}-${dateParts[4]}-${dateParts[5]}`;
            
            if (fromStr && toStr) {
              try {
                const fromDate = parseISO(fromStr);
                const toDate = parseISO(toStr);
                const talentDate = talent.createdDate; 
                
                if (!isValid(fromDate) || !isValid(toDate) || !isValid(talentDate)) {
                  console.log('Invalid date detected:', { fromStr, toStr, talentDate: talent.createdDate });
                  return false;
                }
                
                if (fromDate > toDate) {
                  console.log('Invalid date range: from date is after to date', { fromDate, toDate });
                  return false;
                }
                
                const isWithinRange = isWithinInterval(talentDate, {
                  start: startOfDay(fromDate),
                  end: endOfDay(toDate)
                });
                
                console.log('check date range', dateRange, 'fromDate', fromDate, 'toDate', toDate, 'talentDate', talentDate, 'isWithinRange', isWithinRange);
                
                if (!isWithinRange) return false;
              } catch (error) {
                console.log('Date parsing error:', error, { fromStr, toStr, talentDate: talent.createdDate });
                return false;
              }
            }
          }
        }
      }

      return true;
    });
};


export const randomGeneratorSkill = () => {
  return SKILL_OPTIONS[Math.floor(Math.random() * SKILL_OPTIONS.length)];
}
