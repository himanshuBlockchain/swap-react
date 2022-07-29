import React from "react";
import { Helmet } from "react-helmet";
import Routers from "../routes";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Swap | Sushi</title>
        {/* google font family */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      {/* Routers */}
      <Routers />
    </>
  );
};

export default App;
