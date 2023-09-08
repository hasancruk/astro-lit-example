import { ReactButton } from "./ReactButton";

export const Container = () => (
  <ReactButton variant="secondary" onClick={() => console.log("React button clicked")}>React click me</ReactButton>
);

export default Container;
