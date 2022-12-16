import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Header from "/src/components/about/Header";
import QuickLinks from "/src/components/about/QuickLinks";

export default function About() {
  return (
    <>
      <Header />
      <QuickLinks />
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
