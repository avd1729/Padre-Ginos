import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Order from "./Order";
import Header from "./Header";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <StrictMode>
      <div>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);