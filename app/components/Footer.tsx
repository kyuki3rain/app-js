import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar } from "react-bootstrap";

export const Footer: React.FC = () => (
  <Navbar bg="dark" variant="dark" className="justify-content-center py-3">
    <Navbar.Text>Copyright © Snow Rabbit Inc. All rights reserved?</Navbar.Text>
  </Navbar>
);

export default Footer;
