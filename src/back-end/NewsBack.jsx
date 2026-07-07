import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../tools/Header";

function NewsBack() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://ps-s-test-ru.1gb.ru/api/news.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setNews(data[0]))
      .catch((err) => console.error("Ошибка:", err));
  }, [id]);

  return (
    <>
      <Header />

      <div>
        {news?.news_id}
        <br />
        {news?.news}
      </div>
    </>
  );
}

export default NewsBack;
