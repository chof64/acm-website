import React from "react";

import LayoutGlobal from "/src/components/Layout/LayoutGlobal";
import Layout from "/src/components/Layout/Layout";
import PostHeader from "/src/components/generalPost/PostHeader";
import PostContent from "/src/components/generalPost/PostContent";
import { getDbLatestInfo } from "/src/lib/notionDatabase/getDbLatestInfo";
import { getPageByNotionId } from "/src/lib/notionPage/getPageByNotionId";

export async function getStaticPaths() {
  const { items } = await getDbLatestInfo("blog");
  const paths = items.results.map((item) => ({
    params: { slug: item.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const { items } = await getDbLatestInfo("blog");
  const post = items.results.find((item) => item.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const content = await getPageByNotionId(post.id);

  return { props: { slug, content }, revalidate: 10 };
}

export default function BlogPost({ slug, content }) {
  return (
    <>
      <PostHeader
        className="mt-16"
        data={{
          title: content.metadata.properties.Name.title[0].plain_text,
          category: content.metadata.properties.Category.select.name,
          created_time: content.metadata.parsed_created_time,
        }}
      />
      <PostContent className="mt-16" data={content.content} />
    </>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};
