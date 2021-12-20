const Icon: React.FC<IconProps> = ({
  color = "currentColor",
  width = "21px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path
        d="M3.83739 5.55026L2.53389e-05 9.38763L1.71292 11.1005L7.26318 5.55026L1.71292 -2.4261e-07L2.56743e-05 1.71289L3.83739 5.55026Z"
        fill="white"
      />
    </svg>
  );
};

export default Icon;
