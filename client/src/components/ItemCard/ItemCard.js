import React, { Component } from "react";
import Card from "@material-ui/core/CardHeader";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

export default function ItemCard({ item }) {
  return (
    <Card>
      <CardContent>
        <p>{item.title}</p>
        <p>{item.imageurl}</p>
      </CardContent>
    </Card>
  );
}
