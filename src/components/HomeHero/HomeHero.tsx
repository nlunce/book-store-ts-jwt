// Navbar.tsx
import React from "react";
import homeHeroOverrides from "./homeHeroOverrides";
import { HomeHeroLayout as UIHomeHero } from "../../ui-components";

const HomeHero: React.FC = () => {
  return <UIHomeHero overrides={homeHeroOverrides} />;
};

export default HomeHero;
