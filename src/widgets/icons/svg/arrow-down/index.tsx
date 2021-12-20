const Icon: React.FC<IconProps> = ({ color = "#FFFFFF", width = "21px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M1 1.56897L6.56897 7.13794L12.1379 1.56897"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
