import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ECommerce from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title: "Next.js Basic Chart Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Basic Chart page for NextAdmin Dashboard Kit",
  // other metadata
};

const CockpitPage: React.FC = () => {
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
};

export default CockpitPage;
