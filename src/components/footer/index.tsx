import styled from "styled-components";
import "./style.scss";

const Container = styled.footer``;
export const DefaultFooter: React.FC = () => {
  return (
    <Container className="">
      <div className="container">
        <div className="logo">
          <a>tikkets</a>
        </div>
        <div className="reserved">All rights reserved</div>
      </div>
    </Container>
  );
};
