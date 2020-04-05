import React from "react";

import MinorBanner from "../components/minor.banner";

export default {
  title: "Component | Banners/Minor",
};

export const NoPictures = () => (
  <MinorBanner title="Banner Title" subtitle="Subtitle" body="Banner Body" />
);

export const WithPictures = () => (
  <MinorBanner
    title="Banner Title"
    subtitle="Subtitle"
    body="Banner Body"
    leftPhoto="Products/boots/shutterstock_66842440.jpg"
    rightPhoto="Products/boots/shutterstock_1121278055.jpg"
  />
);
