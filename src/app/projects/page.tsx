import React from "react";
import HeroProj from "@/components/proj/heroproj";
import Proj from "@/components/proj/proj";
import Cta from "@/components/proj/cta";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroProj />
      <Proj />
      <Cta />
    </main>
  );
};

export default ProjectsPage;