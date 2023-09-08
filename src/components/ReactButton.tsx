import * as React from "react";
import {createComponent} from "@lit-labs/react";
import { Button } from "./jsbutton.js";

export const ReactButton = createComponent({
  tagName: 'js-button',
  elementClass: Button,
  react: React,
});
