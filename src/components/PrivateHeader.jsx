import { Link } from 'react-router-dom';

const PrivateHeader = () => {
  const content = (
    <header className="dash-header">
      <div className="dash-header__container">
        <Link to="/private">
          <h1 className="dash-header__title">Tech Notes</h1>
        </Link>
        <nav className="dash-header__nav">
          {/*buttons */}
        </nav>
      </div>
    </header>
  );
  return content;
}

export default PrivateHeader