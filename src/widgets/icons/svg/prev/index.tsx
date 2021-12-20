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
        d="M3.42579 5.55032L7.26316 1.71295L5.55026 5.88852e-05L-2.4261e-07 5.55032L5.55026 11.1006L7.26316 9.38769L3.42579 5.55032Z"
        fill="white"
      />
    </svg>
  );
};

export default Icon;
