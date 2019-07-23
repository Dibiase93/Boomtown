import React from "react";
import ItemCard from "../ItemCard/ItemCard.js";
import { connect } from "react-redux";

const ShareItemPreview = ({ shareItemPreview }) => {
  return (
    <div>
      <ItemCard item={shareItemPreview} />
    </div>
  );
};

const mapStateToProps = ({ shareItemPreview }) => {
  return {
    shareItemPreview
  };
};

export default connect(mapStateToProps)(ShareItemPreview);
