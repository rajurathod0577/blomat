import React from "react";
import "./App.css";
import { Container, createTheme, Grid, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import { featuredPosts } from "./Data/Data";
import PostCard from "./components/PostCard";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid>
            {featuredPosts.map((post) => (
              <PostCard post={post} key={post.title}></PostCard>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
