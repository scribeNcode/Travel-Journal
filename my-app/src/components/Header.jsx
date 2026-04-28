import Logo from "../assets/Icons/Logo.svg";

function Header() {
  return (
    <div className="font-league">
      <header>
        <div className="bg-primary fixed  w-full  flex justify-center items-center h-13.75 gap-2 text-bg">
          <img src={Logo} alt="website logo" />
          <h1>my travel journal</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
