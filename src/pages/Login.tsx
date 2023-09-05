import iconImg from '@img/main_icon.png';
import Inputs from '@comp/login/Inputs';
import SnsBtns from '@comp/login/SnsBtns';

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-wrap">
          <div className="login__title">
            <img src={iconImg} alt="LINKS" />
            <span>LINKS</span>
          </div>
          <div className="login__input-wrap">
            <div className="login-desc">
              <h1>Hello</h1>
              <p>Sign in to your account</p>
            </div>
            <SnsBtns />
            <Inputs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
