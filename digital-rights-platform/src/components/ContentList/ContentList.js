import React from "react";
import { useNavigate } from "react-router-dom";

const ContentList = () => {
  const navigate = useNavigate();
  //TO-D0: Fetch content from the blockchain
  const contents = [
    // ... your content objects with id and other properties
  ];

  const goToContentDetail = (id) => {
    navigate(`/content/${id}`);
  };
  return (
    <div className="content-grid">
      {contents.map((content) => (
        <div
          key={content.id}
          className="content-card"
          onClick={() => goToContentDetail(content.id)}
        >
          {/* Display content details here */}
        </div>
      ))}
    </div>
  );
};
export default ContentList;
