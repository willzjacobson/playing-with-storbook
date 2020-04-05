import React from "react";
import { text } from "@storybook/addon-knobs";

import MajorBanner from "../components/major.banner";

export default {
  title: "Component | Banners/Major",
  parameters: {
    // demonstrating how to override global settings for the 'info' addon for this particular story group
    info: {
      text: 'This is where you might put a description of how the component should be used',
    },
  },
};

export const WithTitleOnly = () => (
  <MajorBanner
    title="Banner Title"
    photo="People Outdoors/shutterstock_116403520.jpg"
  />
);
WithTitleOnly.parameters = {
  info: {
    inline: false,
  },
};

export const WithAllTextOptions = () => {
  const title = text('Title', 'Banner Title');
  const subtitle = text('Subtitle', 'Banner Subtitle');
  const body = text('Body', 'Banner Body');
  return (
    <MajorBanner
      title={title}
      photo="People Outdoors/shutterstock_116403520.jpg"
      subtitle={subtitle}
      body={body}
    />
  );
};
