import LoginFom from "../Components/LoginFom";
import Banner from "../Components/Banner";
import HeaderTop from "../Components/HeaderTop";

function Login() {
  return (
    <div>
      <HeaderTop />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <Banner />
          </div>
          <div className="col-lg-6">
            <LoginFom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
