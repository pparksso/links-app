import styled from 'styled-components';

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url('/src/assets/images/login_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const title = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  /* margin-bottom: 15px; */
  .img-box {
    position: absolute;
    top: -40px;
    left: -40px;
  }
  span {
    font-size: 3em;
    font-weight: 700;
    color: #fff;
    z-index: 1;
  }
`;

export const inputBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 51px 110px 77px;
`;

export const descBox = styled.div`
  h1 {
    font-size: 2.5em;
    font-weight: 900;
    color: #313f48;
  }
`;
