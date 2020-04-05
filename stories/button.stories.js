import React from "react";
import { action } from "@storybook/addon-actions";

import CTAButton from "../components/form/cta-button";

export default {
  title: 'Building Blocks | Button',
};

export const callToAction = () => (
  <CTAButton label="Submit" onClick={action("button-click")} />
);
