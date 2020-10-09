import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export const Title: React.FC = ({ children }) => (
  <h1 className="mb-4">
    <ins>{children}</ins>
  </h1>
);

export default Title;
