import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1920px;
  display: flex;
  background: var(--netral-200);
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1180px) {
    height: 82px;
  }

  @media (max-width: 1200px) {
    padding: 80px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  max-height: 800px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  margin-top: 10px;

  @media (max-width: 1200px) {
    width: 1200px;
    height: 600px;
  }
`;

export const Slider = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
`;

export const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
  max-width: 800px;

  /* @media (min-width: 1920px) {
    max-width: 1394px;
    height: 100% !important;
  }

  @media (min-width: 1440px) {
    max-width: 1080px;
    height: 1014px;
  } */
`;

export const Slide = styled.div`
  max-width: 1080px;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 10;
`;

export const FormLogin = styled.div`
  width: 80%;
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1920px) {
    max-width: 768px !important;
  }

  @media (max-width: 1200px) {
    width: 70%;
    height: 100%;
  }
`;

export const Header = styled.div`
  padding: 32px 32px 0;
  text-align: center;
  margin-bottom: 12.72px;

  @media (max-width: 1200px) {
    padding-top: 15px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32.72px;

  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.div`
  color: var(--text);
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Subtitle = styled.div`
  color: var(--netral-600);
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ChooseAccount = styled.div`
  margin-bottom: 32.72px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  @media (max-width: 1180px) {
    margin-bottom: 20px;
  }
`;

export const WrapperPin = styled.div`
  margin-bottom: 12.72px;
`;

export const EnterPin = styled.div`
  text-align: center;
  margin-bottom: 12px;
  color: var(--netral-600);
`;

export const PinWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32.72px;

  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const DialPadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (max-width: 1180px) {
    margin-bottom: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .shift-button {
    width: 100%;
    border-radius: 12px;
  }
`;
