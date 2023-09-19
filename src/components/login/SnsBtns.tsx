import kakaoIcon from '@img/kakao_icon.png';
import googleIcon from '@img/google_icon.png';
// import naverIcon from '@img/naver_icon.png';
import appleIcon from '@img/apple-icon.png';
import * as S from '@/styles/login.style';

const SnsBtns = () => {
  return (
    <S.snsBoxComp>
      <div className="img-box">
        <button>
          <img src={googleIcon} alt="구글 로그인" />
        </button>
      </div>
      <div className="img-box">
        <button>
          <img src={kakaoIcon} alt="카카오 로그인" />
        </button>
      </div>
      <div className="img-box">
        <button>
          <img src={appleIcon} alt="애플 로그인" />
        </button>
      </div>
    </S.snsBoxComp>
  );
};

export default SnsBtns;
