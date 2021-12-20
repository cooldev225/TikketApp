import styled from "styled-components";
import "./style.scss";
import { Button } from "src/widgets";
const Container = styled.header``;
export const DefaultHeader: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo">
          <a>tikkets</a>
        </div>
        <ul className="menu">
          <li>
            <a>Latest drop</a>
          </li>
          <li>
            <a>Previous drops</a>
          </li>
          <li className="btn">
            <Button
              borderRadius={0}
              color="#040519"
              textColor="white"
              borderColor="white"
            >
              Connect
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  );
};
