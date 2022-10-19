import React from "react";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import Platform from "/src/components/Layout/Platform";

import { getLatestInformationItems } from "/src/packages/LatestInformation/GetLatestInformation";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const ALL_INFOS = await getLatestInformationItems();
  const INFO = ALL_INFOS.find((info) => info.slug === slug);

  return {
    props: {
      slug: slug,
      metadata: INFO,
    },
    revalidate: 30,
  };
}

export default function Info({ slug, metadata }) {
  return (
    <>
      <Platform>
        <div>
          <h1 className="text-3xl font-bold">
            {metadata.properties.Name.title[0].plain_text}
          </h1>
        </div>
        <div className="flex font-mono text-sm gap-x-2">
          <p>Created: {metadata.parsed_created_time}</p>
          <p>(Edited: {metadata.parsed_last_edited_time})</p>
          {/* // TODO: Add component to convert user id to name and profile */}
          <pre>{metadata.last_edited_by.id}</pre>
        </div>
      </Platform>
      <Platform>
        <div>{slug}</div>
        <pre>{JSON.stringify(metadata, null, 2)}</pre>
      </Platform>
    </>
  );
}

Info.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
