import React from "react";
import ItemCard from "../ItemCard/ItemCard.js";
import { connect } from "react-redux";

const ShareItemPreview = ({ shareItemPreview }) => {
  return shareItemPreview && <ItemCard item={shareItemPreview} />;
};

const mapStateToProps = ({ shareItemPreview }) => {
  return {
    shareItemPreview
  };
};

export default connect(mapStateToProps)(ShareItemPreview);
