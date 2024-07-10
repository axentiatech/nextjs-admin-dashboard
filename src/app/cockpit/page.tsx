import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Basic Chart Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Basic Chart page for NextAdmin Dashboard Kit",
  // other metadata
};

const CockpitPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Cockpit" />

      <h1 className="pt-24 text-center text-3xl font-semibold text-gray-800 dark:text-gray-200">
        Welcome the EC Immobilien GmbH properties
      </h1>
    </DefaultLayout>
  );
};

export default CockpitPage;
