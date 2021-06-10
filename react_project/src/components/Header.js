import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <a className="navbar-brand" href="/">
          Вебпочтальон
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/note">
                Запись
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Создать
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Сервис
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
//
