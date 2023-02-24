import loadImg from "../../assets/images/loading.gif";
import ReactDOM from "react-dom";
import "./Loading.css";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="load">
        <img src={loadImg} alt="Loading..." width="100" height="100" />
      </div>
    </div>,
    document.getElementById("load")
  );
};
export default Loading;
