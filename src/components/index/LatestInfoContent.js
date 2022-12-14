import React from "react";
import Link from "next/link";

import { getDbLatestInfo } from "/src/lib/notionDatabase/getDbLatestInfo";

export default function LatestInfoContent({ ident, name, data }) {
  // filter data where ident matches
  const filteredData = data.filter(
    (item) => item.properties.Category.select.name.toLowerCase() === ident
  );
  const latestData = filteredData.slice(0, 5);

  return (
    <div>
      <h1 className="text-xl font-semibold md:text-2xl">{name}</h1>
      <div className="mt-2">
        {latestData.map((item) => (
          <Link href={`/${ident}/${item.slug}`} key={item.id}>
            <a>
              <h2 className="font-medium hover:underline">
                <span className="mr-1 rounded-full border border-orange-500 py-0.5 px-1 text-xs text-orange-700 no-underline">
                  {item.parsed_created_time}
                </span>
                {item.properties.Name.title[0].plain_text}
              </h2>
            </a>
          </Link>
        ))}
      </div>
      {/* <pre>{JSON.stringify(filteredData, null, 2)}</pre> */}
    </div>
  );
}
