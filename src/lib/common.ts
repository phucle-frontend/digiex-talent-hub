import { talents } from "@/data/talents";

export const handleFilterTalents = ({
  search,
  filterValues,
}: {
  search: string;
  filterValues: Record<string, string>;
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
        t.skills.toLowerCase().includes(q)
      );
    })
    .filter((t) => {
      const f = filterValues;
      if (
        f.nationality &&
        f.nationality !== "All" &&
        t.nationality !== f.nationality
      )
        return false;
      if (
        f.skills &&
        f.skills !== "All" &&
        t.skills.toLowerCase() !== f.skills.toLowerCase()
      )
        return false;
      if (f.status && f.status !== "All") {
        const desired = f.status === "Active" ? "Available" : "Unavailable";
        if (t.status !== desired) return false;
      }
      if (f.cvStatus && f.cvStatus !== "All") {
        if (f.cvStatus === "Uploaded" && !t.isCvUploaded) return false;
        if (f.cvStatus === "Unuploaded" && t.isCvUploaded) return false;
      }
      if (f.hired && f.hired !== "All") {
        const wantHired = f.hired === "Hired";
        if (t.isHired !== wantHired) return false;
      }
      if (f.totalExps && f.totalExps !== "All") {
        const years = t.totalExps;
        switch (f.totalExps) {
          case "0-1":
            if (!(years >= 0 && years < 1)) return false;
            break;
          case "1-3":
            if (!(years >= 1 && years < 3)) return false;
            break;
          case "3-5":
            if (!(years >= 3 && years < 5)) return false;
            break;
          case "5+":
            if (!(years >= 5)) return false;
            break;
        }
      }
      if (f.talentLevel && f.talentLevel !== "All") {
        const level = Number(f.talentLevel);
        if (Number.isFinite(level) && t.talentLevel !== level) return false;
      }
      if (f.backgroundInterview && f.backgroundInterview !== "All") {
        const score = Number(t.backgroundInterview.score);
        switch (f.backgroundInterview) {
          case "1":
            if (!(score >= 0.0 && score < 1.0)) return false;
            break;
          case "2":
            if (!(score >= 1.0 && score < 2.0)) return false;
            break;
          case "3":
            if (!(score >= 2.0 && score < 3.0)) return false;
            break;
          case "4":
            if (!(score >= 3.0 && score < 4.0)) return false;
            break;
          case "5":
            if (!(score >= 4.0 && score <= 5.0)) return false;
            break;
        }
      }
      if (f.technicalInterview && f.technicalInterview !== "All") {
        const score = Number(t.technicalInterview.score);
        switch (f.technicalInterview) {
          case "1":
            if (!(score >= 0.0 && score < 1.0)) return false;
            break;
          case "2":
            if (!(score >= 1.0 && score < 2.0)) return false;
            break;
          case "3":
            if (!(score >= 2.0 && score < 3.0)) return false;
            break;
          case "4":
            if (!(score >= 3.0 && score < 4.0)) return false;
            break;
          case "5":
            if (!(score >= 4.0 && score <= 5.0)) return false;
            break;
        }
      }
      return true;
    });
};