import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import Header from "/src/components/index/Header";
import LatestInfo from "/src/components/index/LatestInfo";
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
      <Header className="mt-16" />
      <LatestInfo className="mt-16" data={latestInfo} />
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
