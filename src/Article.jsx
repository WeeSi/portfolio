import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    getArticle();
    return () => {};
  }, []);

  const getArticle = async () => {
    const { data } = await axios.get(
      `https://franckehui.fr/getarticle.php?id=${id}`
    );
    setData(data);
  };

  return (
    <div className="md:pt-28 pt-20 screen-padding md:px-20 px-4">
      <div style={{ maxWidth: "700px" }} className="mb-11 mx-auto">
        <img src="https://franckehui.fr/portfolio/projet/angular/image/gsb_login.PNG" />
      </div>
      <div style={{ maxWidth: "600px" }} className="article-content mx-auto  mb-7">
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </div>
  );
};

export default Article;
