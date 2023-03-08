import { Rate } from "antd";
import React from "react";

type Props = {
  starNumber: number;
};

const Star = (props: Props) => {
  return <Rate disabled value={props?.starNumber} />;
};

export default React.memo(Star);
