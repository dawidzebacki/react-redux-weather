import React from "react";
import { FooterContainer } from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Developed by{" "}
        <a href="https://github.com/dawidzebacki/">Dawid Zębacki</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
