import { useMemo } from "react";
import styled from "styled-components";
import "./style.scss";

type Props = ButtonProps;

const Container = styled.button`
  --worldie-button-color: ${(props) => props.color};
  --worldie-button-text-color: ${(props) => props.textColor};
  --worldie-button-border-color: ${(props) => props.borderColor};
  --worldie-button-border-radius: ${(props) => props.borderRadius}px;
`;

export const Button: React.FC<Props> = (props) => {
  const {
    className,
    disabled,
    color = "white",
    textColor = "currentColor",
    borderColor,
    borderRadius = 100,
  } = props;
  const class_name = useMemo<string>(() => {
    const class_name = ["worldie-button"];
    disabled && class_name.push("disabled");
    className && class_name.push(className);
    return class_name.join(" ");
  }, [disabled, className]);

  return (
    <Container
      className={class_name}
      onClick={props.onClick}
      color={color}
      textColor={textColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      <div className="content">{props.children}</div>
    </Container>
  );
};

export default Button;
