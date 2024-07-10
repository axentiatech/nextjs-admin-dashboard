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

      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mx-auto max-w-md">
            <h1 className="mb-6 text-2xl font-semibold">Imprint</h1>

            <section className="mb-6">
              <h2 className="mb-2 text-lg font-semibold">Address</h2>
              <p>EC Immobilien GmbH</p>
              <p>Hüttenstrasse 115</p>
              <p>40227 Düsseldorf, Germany</p>
              <p>Telephone: +49 179 7541388</p>
              <p>E-Mail: info@heaven-homes.de</p>
              <p>Internet: http://www.heaven-homes.de</p>
            </section>

            <section className="mb-6">
              <h2 className="mb-2 text-lg font-semibold">Disclaimer</h2>
              <p className="text-sm">
                The content of our site has been prepared with the utmost care.
                Nevertheless, we cannot assume any liability for the
                correctness, completeness and up-to-date status of the content.
                In particular, EC Immobilien GmbH reserves the right to make
                changes or extensions to the information provided without prior
                notification. The temporary or final ending of the publication
                is also possible without prior notification. EC Immobilien GmbH
                shall not be liable for any damages of a material or immaterial
                nature caused by use of information provided on its websites,
                unless liability applies as a result of demonstrably intentional
                or grossly negligent conduct.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="mb-2 text-lg font-semibold">
                © Copyright 2020 - Copyright notice
              </h2>
              <p className="text-sm">
                All contents of this website ( www.heaven-homes.de ), in
                particular texts, photographs and graphics, are protected by
                copyright. Unless expressly indicated otherwise, the copyright
                lies with EC Immobilien GmbH, Hüttenstrasse 115 in 40227
                Düsseldorf. Please contact us if you wish to use the contents of
                this website.
              </p>
              <p className="mt-2 text-sm">
                Content published under the "Creative Commons" license is marked
                as such. They may be used in accordance with the stated license
                conditions.
              </p>
              <p className="mt-2 text-sm">
                Anyone who violates copyright law (e.g. copies images or texts
                without permission) is liable to prosecution in accordance with
                §§ 106 ff UrhG (German Copyright Act), will also be warned for a
                fee and must pay compensation (§ 97 UrhG).
              </p>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CockpitPage;
