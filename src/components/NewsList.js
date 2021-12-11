import { useContext } from "react";
import NewsContext from "../context/news/NewsContext";

const NewsList = () => {
  const newsContext = useContext(NewsContext);
  const { getNews } = newsContext;
  getNews();

  return <div>I am the news list</div>;
};

export default NewsList;
