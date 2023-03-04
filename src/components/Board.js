import React from "react";
import { Box } from "./Box";

export const Board = ({ boardList, onClick }) => {
  return (
    <div>
      {boardList.map((value, idx) => {
        return <Box value={value} onClick={() => onClick(idx)} />;
      })}
    </div>
  );
};