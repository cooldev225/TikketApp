interface ButtonProps {
  className?: string;
  disabled?: boolean;
  color?: string;
  borderRadius?: number;
  borderColor?: string;
  textColor?: string;

  onClick?: (event: React.MouseEvent) => void;
}
