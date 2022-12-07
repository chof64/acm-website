//? /src/components/Layout/LayoutGlobal.js
//* This is the global layout, which is responsible for setting the
//* head tags of the whole application.
//! Do not add any components to this layout, if you need to add a component,
//! you can put it in the local layout or layout group.

import Head from "next/head";

function LayoutGlobal({ title, children }) {
  return (
    <>
      <Head>
        {/* //? Dynamic Tags */}
        <title>
          {title
            ? "${title} - UA ACM"
            : "Association of Computing Machinery - University of Antique"}
        </title>

        {/* //? Static Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <>{children}</>
    </>
  );
}

export default LayoutGlobal;
