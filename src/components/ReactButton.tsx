import type {EventName} from '@lit-labs/react';

import * as React from "react";
import {createComponent} from "@lit-labs/react";
import { Button } from "./button.js";

export const ReactButton = createComponent({
  tagName: 'cr-button',
  elementClass: Button,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
