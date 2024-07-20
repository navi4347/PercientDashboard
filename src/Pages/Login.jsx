import LoginFom from "../Components/LoginFom";
import Banner from "../Components/Banner";
import HeaderTop from "../Components/HeaderTop";

function Login() {
  return (
    <div>
      <HeaderTop />
      <div className="Center Auth">
        <div className="aleft">
          <Banner />
        </div>
        <div className="container aright">
          <LoginFom />
        </div>
      </div>
    </div>
  );
}

export default Login;
