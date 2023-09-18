import iconImg from '@img/main_icon.png';
import Inputs from '@comp/login/Inputs';
import SnsBtns from '@comp/login/SnsBtns';
import * as S from '@/styles/login.style';

const Login = () => {
  return (
    <div className="login">
      <S.container>
        <S.wrap>
          <S.title>
            <div className="img-box">
              <img src={iconImg} alt="LINKS" />
            </div>
            <span>LINKS</span>
          </S.title>
          <S.inputBox>
            <S.descBox>
              <h1>Hello</h1>
              <p>Sign in to your account</p>
            </S.descBox>
            <SnsBtns />
            <Inputs />
          </S.inputBox>
        </S.wrap>
      </S.container>
    </div>
  );
};

export default Login;
