import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import React from "react";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import PokemonListScreen from "../screens/PokemonListScreen/PokemonListScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/list",
    element: <PokemonListScreen />,
  },
]);

export default router;
