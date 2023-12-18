import {Outlet} from "react-router-dom";
import PrivateHeader from "./PrivateHeader.jsx";
import PrivateFooter from "./PrivateFooter.jsx";

const PrivateLayout = () => {
  return (
    <>
      <PrivateHeader/>
      <div className="dash-container">
        <Outlet/>
      </div>
      <PrivateFooter/>
    </>
  )
}

export default PrivateLayout