import React from "react";
import "./collection-preview.scss";
import CollectionItem from "./../collection-item/collection-item";
function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...item }) => (
            <CollectionItem key={id} {...item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
