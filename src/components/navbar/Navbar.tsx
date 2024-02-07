import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>In</span>
      </div>
      <div className="icon">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="" alt="" />
          <span>In</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
