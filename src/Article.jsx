import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    getArticle();
    return () => { };
  }, []);

  const getArticle = async () => {
    const { data } = await axios.get(
      `https://franckehui.fr/getarticle.php?id=${id}`
    );
    setData(data);
  };

  return (
    <section id="section-4">
      <div
        className="m-auto"
        style={{
          paddingTop: "150px",
          paddingLeft: "80px",
          paddingRight: "80px",
          maxWidth: "1440px",
        }}
      >
        <div className="article-content">
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </div>
      </div>
    </section>
  );
};

export default Article;
