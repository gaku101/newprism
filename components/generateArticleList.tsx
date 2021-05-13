import { Feed } from ".prisma/client";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import * as _ from "lodash";
import { NotifyLoading } from "./notifyLoading";
import { NotifyError } from "./notifyError";
import { ArticleList } from "./articleList";
const parser = new Parser();

const CORS_PROXY = "http://localhost:3000/api/cors?";

export const GenerateArticleList = ({ feeds }: { feeds: Feed[] }) => {
  const [{ loading, error, data }, setGet] = useState({
    error: false,
    loading: false,
    data: [],
  });
  useEffect(() => {
    (async () => {
      try {
        const fetchedItems = _.reduce(
          await Promise.all(
            feeds.map(async (oneFeed) => {
              const { items } = await parser.parseURL(CORS_PROXY + oneFeed.url);
              console.log(items);
              return items.map((o) => ({ ...o, feed: oneFeed }));
            })
          ),
          (sum, n) => [...sum, ...n]
        );

        setGet((o) => ({ ...o, data: fetchedItems, loading: false }));
      } catch (error) {
        setGet((o) => ({ ...o, error, loading: false }));
      }
    })();
  }, [feeds]);
  if (loading) {
    return <NotifyLoading />;
  }
  if (error) {
    return <NotifyError />;
  }
  return <ArticleList articleList={data} />;
};
