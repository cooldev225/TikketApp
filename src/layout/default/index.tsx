import { DefaultHeader, DefaultFooter } from "src/components";
import "./style.scss";
export const DefaultLayout: React.FC = (props) => {
  return (
    <div className="tikket-default-layout">
      <DefaultHeader />
      <div className="main-content">{props.children}</div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
