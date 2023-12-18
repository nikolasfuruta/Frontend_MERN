import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { useNavigate, useLocation } from "react-router-dom";

const PrivateFooter = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const onGoHomeClicked = () => navigate('/private')

  let goHomeButton = null;
  if(pathname !== '/private') {
    goHomeButton = (
      <button 
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse}/>
      </button>
    );
  }

  const content = (
    <footer className="dash-footer">
      { goHomeButton }
      <p>CurrentUser:</p>
      <p>Status:</p>
    </footer>
  );

  return content;
}

export default PrivateFooter