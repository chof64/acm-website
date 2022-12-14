import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Header from "/src/components/index/Header";
import AboutCta from "/src/components/index/AboutCta";
import AboutMore from "/src/components/index/AboutMore";
import { getDbLatestInfo } from "/src/lib/notionDatabase/getDbLatestInfo";

export const getStaticProps = async () => {
  return {
    props: {
      latestInfo: await getDbLatestInfo("all"),
    },
    revalidate: 10,
  };
};

export default function Index({ latestInfo }) {
  return (
    <>
      <Header className="" />
      <AboutCta />
      <AboutMore />
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
