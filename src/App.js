import React from "react";
import "./App.css";
import {
  Container,
  createTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./components/Header";
import { featuredPosts, sidebar } from "./Data/Data";
import PostCard from "./components/PostCard";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <PostCard post={post} key={post.title}></PostCard>
            ))}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Main Title" />
            <SideBar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
        <Footer title="Footer" description="Sample Footer" />
      </ThemeProvider>
    </div>
  );
}

export default App;
