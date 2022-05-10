import {Link} from "react-router-dom";

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__logo logo">
        <Link to={`/`} className="logo__link">
          <img src={"img/common/logo.svg"} alt="Maffin Check List" width="166" height="34" className="logo__img" />
        </Link>
      </div>
      <Link className="header__auth" aria-label="Login / Logout" to={`/`}>
        <span className="header__auth-text">a.vafin85@gmail.com</span>
        <svg className="header__icon" width="20" height="20">
          <use xlinkHref="img/sprite.svg#icon-login"></use>
        </svg>
      </Link>
      <button className="header__about" aria-label="О проекте">
        <svg className="header__icon" width="20" height="20">
          <use xlinkHref="img/sprite.svg#icon-question"></use>
        </svg>
      </button>
    </header>
  );
}

export default Header;
