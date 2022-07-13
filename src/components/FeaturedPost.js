import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montserrat, sans-serif",
  },
  cover: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1657667779190-8e90af2d9f3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)",
    backgroundPosition: "center",
    padding: "35px 25px",
    backgroundSize: "cover",
  },
  btn: {},
});

const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title for your longer featured blog post
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          hendrerit quam id ipsum iaculis, vitae mollis est viverra. Sed cursus
          at nulla vel laoreet.
        </Typography>
        <CardActions>
          <Button variant="text" className={classes.btn}>
            Read More...
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default FeaturedPost;
