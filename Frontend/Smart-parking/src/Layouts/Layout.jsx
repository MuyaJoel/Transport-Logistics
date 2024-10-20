import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"navbar" "main" `,
        md: `"navbar navbar" "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: " 1fr",
      }}
    >
      <GridItem area="navbar" bg="lightblue">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="whitesmoke">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
