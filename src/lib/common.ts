import { talents } from "@/data/talents";
import { parseISO, isWithinInterval, isValid, startOfDay, endOfDay } from "date-fns";

export const handleFilterTalents = ({
  search,
  filterValues,
}: {
  search: string;
  filterValues: Record<string, string[]>;
}) => {
  return talents
    .filter((t) => {
      const q = search.trim().toLowerCase();
      if (!q) return true;
      return (
        t.name.name.toLowerCase().includes(q) ||
        t.name.email.toLowerCase().includes(q) ||
        t.phoneNumber.toLowerCase().includes(q) ||
        t.nationality.toLowerCase().includes(q) ||
        (t.skills &&
          t.skills.some((skill) => skill.name.toLowerCase().includes(q)))
      );
    })
    .filter((t) => {
      const f = filterValues;

      if (f.skills && f.skills.length ) {
        const talentSkills = t.skills || [];
        const hasMatchingSkill = f.skills.some((filterSkill) => {
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

      if (f.position && f.position.length > 0) {
        if (!f.position.includes(t.position)) return false;
      }

      if (f.totalExps && f.totalExps.length > 0) {
        const years = t.totalExps;
        const matchesRange = f.totalExps.some((range) => {
          if (range.includes("-")) {
            const [from, to] = range.split("-").map(Number);
            return years >= from && years <= to;
          }
          return false;
        });
        if (!matchesRange) return false;
      }

      if (f.talentLevel && f.talentLevel.length > 0) {
        if (!f.talentLevel.includes(t.talentLevel.toString())) return false;
      }

      if (f.partners && f.partners.length > 0) {
        if (!f.partners.includes(t.partner || "")) return false;
      }

      if (f.availability && f.availability.length > 0) {
        if (!f.availability.includes(t.availability)) return false;
      }

      if (f.verifiedProfile && f.verifiedProfile.length > 0) {
        const isVerified = f.verifiedProfile.includes("Verified");
        if (isVerified && !t.isVerifiedProfile) return false;
        if (!isVerified && t.isVerifiedProfile) return false;
      }

      if (f.language && f.language.length > 0) {
        const talentLanguages = t.language || [];
        const hasMatchingLanguage = f.language.some((lang) =>
          talentLanguages.includes(lang)
        );
        if (!hasMatchingLanguage) return false;
      }

      if (
        f.talentStatus.map((item) => item.toUpperCase()) &&
        f.talentStatus.length > 0
      ) {
        if (
          !f.talentStatus.map((item) => item.toUpperCase()).includes(t.status)
        )
          return false;
      }

      if (f.profileStatus && f.profileStatus.length > 0) {
        console.log('cehck profile status', f.profileStatus, t.profileStatus)

        if (
          !f.profileStatus
            .includes(t.profileStatus|| "")
        )
          return false;
      }

      if (f.internal && f.internal.length > 0) {
        if (!f.internal.includes(t.internal || "")) return false;
      }

      if (f.createdDate && f.createdDate.length > 0) {
        const dateRange = f.createdDate[0];
        if (dateRange && dateRange.includes("-")) {
          const dateParts = dateRange.split("-");
          if (dateParts.length === 6) {
            const fromStr = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
            const toStr = `${dateParts[3]}-${dateParts[4]}-${dateParts[5]}`;
            
            if (fromStr && toStr) {
              try {
                const fromDate = parseISO(fromStr);
                const toDate = parseISO(toStr);
                const talentDate = t.createdDate; 
                
                if (!isValid(fromDate) || !isValid(toDate) || !isValid(talentDate)) {
                  console.log('Invalid date detected:', { fromStr, toStr, talentDate: t.createdDate });
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
                console.log('Date parsing error:', error, { fromStr, toStr, talentDate: t.createdDate });
                return false;
              }
            }
          }
        }
      }

      return true;
    });
};
