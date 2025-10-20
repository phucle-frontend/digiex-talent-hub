import { talents } from "@/data/talents";

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
        (t.skills && t.skills.some(skill => skill.name.toLowerCase().includes(q)))
      );
    })
    .filter((t) => {
      const f = filterValues;
      
      // Skills filter
      if (f.skills && f.skills.length > 0) {
        const talentSkills = t.skills || [];
        // allow filters of format: "Name | YOE | COMPETENCY" or just name
        const hasMatchingSkill = f.skills.some(filterSkill => {
          const parts = filterSkill.split('|').map(p => p.trim());
          const filterName = parts[0]?.toLowerCase();
          const filterYoe = parts[1] ? Number(parts[1]) : undefined;
          const filterCompetency = parts[2]?.toLowerCase();

          return talentSkills.some(s => {
            const nameOk = filterName ? s.name.toLowerCase() === filterName : true;
            const yoeOk = typeof filterYoe === 'number' && !Number.isNaN(filterYoe) ? s.yoe === filterYoe : true;
            const compOk = filterCompetency ? s.competency.toLowerCase() === filterCompetency : true;
            return nameOk && yoeOk && compOk;
          })
        });
        if (!hasMatchingSkill) return false;
      }
      
      // Position filter
      if (f.position && f.position.length > 0) {
        if (!f.position.includes(t.position)) return false;
      }
      
      // Total Experience filter
      if (f.totalExps && f.totalExps.length > 0) {
        const years = t.totalExps;
        const matchesRange = f.totalExps.some(range => {
          if (range.includes('-')) {
            const [from, to] = range.split('-').map(Number);
            return years >= from && years <= to;
          }
          return false;
        });
        if (!matchesRange) return false;
      }
      
      // Talent Level filter
      if (f.talentLevel && f.talentLevel.length > 0) {
        if (!f.talentLevel.includes(t.talentLevel.toString())) return false;
      }
      
      // Partners filter
      if (f.partners && f.partners.length > 0) {
        if (!f.partners.includes(t.partner || "")) return false;
      }
      
      // Availability filter
      if (f.availability && f.availability.length > 0) {
        if (!f.availability.includes(t.availability)) return false;
      }
      
      // Verified Profile filter
      if (f.verifiedProfile && f.verifiedProfile.length > 0) {
        const isVerified = f.verifiedProfile.includes("Verified");
        if (isVerified && !t.isVerifiedProfile) return false;
        if (!isVerified && t.isVerifiedProfile) return false;
      }
      
      // Language filter
      if (f.language && f.language.length > 0) {
        const talentLanguages = t.language || [];
        const hasMatchingLanguage = f.language.some(lang => 
          talentLanguages.includes(lang)
        );
        if (!hasMatchingLanguage) return false;
      }
      
      // Talent Status filter
      if (f.talentStatus && f.talentStatus.length > 0) {
        if (!f.talentStatus.includes(t.status)) return false;
      }
      
      // Profile Status filter
      if (f.profileStatus && f.profileStatus.length > 0) {
        // Map talent data to profile status for filtering
        let talentProfileStatus = 'Manual'; // Default status
        if (t.isVerifiedProfile) {
          talentProfileStatus = 'Email Verified';
        }
        if (t.profileFeedback === 'Very Good') {
          talentProfileStatus = 'Profile Completed';
        } else if (t.profileFeedback === 'Good') {
          talentProfileStatus = 'Basic Info Completed';
        }
        
        if (!f.profileStatus.includes(talentProfileStatus)) return false;
      }
      
      // Internal filter
      if (f.internal && f.internal.length > 0) {
        if (!f.internal.includes(t.internal || "")) return false;
      }
      
      // Created Date filter
      if (f.createdDate && f.createdDate.length > 0) {
        const dateRange = f.createdDate[0];
        if (dateRange && dateRange.includes('-')) {
          const [fromStr, toStr] = dateRange.split('-');
          if (fromStr && toStr) {
            const fromDate = new Date(fromStr);
            const toDate = new Date(toStr);
            const talentDate = new Date(t.createdDate);
            if (talentDate < fromDate || talentDate > toDate) return false;
          }
        }
      }
      
      return true;
    });
};