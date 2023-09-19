import * as S from '@/styles/login.style';
const Inputs = () => {
  return (
    <S.inputsComp>
      <div>
        <div>
          <label htmlFor="">
            ID
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Password
            <input type="text" />
          </label>
        </div>
      </div>
      <button>Forgot Password?</button>
      <button>LOG IN</button>
      <div className="">
        <p>Don't have an account?</p>
        <button>Sign up</button>
      </div>
    </S.inputsComp>
  );
};

export default Inputs;
