import React from "react";

import LayoutGlobal from "/src/components/LayoutGlobal";
import Layout from "/src/components/Layout";
import PageHeader from "/src/components/dynamicPages/PageHeader";
import PageContent from "/src/components/dynamicPages/PageContent";
import { getDbDynamicRoutes } from "/src/lib/notionDatabase/getDbDynamicRoutes";
import { getPostContent } from "/src/lib/notionPage/getPostContent";

export async function getStaticPaths() {
  const list = await getDbDynamicRoutes("root");
  const post_slug = list.items.results.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: post_slug,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const list = await getDbDynamicRoutes("root");
  const post = list.items.results.find((item) => item.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const post_content = await getPostContent(post.id);

  return {
    props: {
      slug: slug,
      metadata: post,
      content: post_content,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ metadata, content }) {
  if (!metadata || !content) {
    return <p>Content error</p>;
  }

  return (
    <>
      <PageHeader
        className="mt-24"
        data={{
          title: metadata.properties.Name.title[0].plain_text,
        }}
      />
      <PageContent className="mt-8" data={content} />
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
