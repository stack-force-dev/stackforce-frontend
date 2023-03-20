import React from "react";

const iconsList = require.context("../../assets/icons", false, /\.svg$/);

const importAll = (r) => {
  const icons = {};
  r.keys().map((item) => {
    icons[item.replace("./", "").replace(".svg", "")] = r(item).default;
  });
  return icons;
};

const images = importAll(iconsList);

interface IconProps {
  name: string;
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

export const Icon: (props: IconProps) => JSX.Element = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, ...rest } = props;
  const Component = (images[name] || images["logo"]) as React.ElementType;
  return <Component {...rest} />;
};

export default Icon;
