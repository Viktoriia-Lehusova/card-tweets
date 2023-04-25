import styled from 'styled-components';

export const StyledItem = styled.li`
  list-style: none;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  font-size: 18px;
`;
export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;

  padding: 0;
`;
export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;

  width: 76px;
  height: 22px;
`;

export const Icon = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;

  width: 308px;
  height: 168px;
`;

export const Line = styled.span`
  position: absolute;
  left: 0px;
  top: 214px;

  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.span`
  position: absolute;
  left: 150px;
  top: 180px;

  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Text = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  text-transform: uppercase;

  color: #ebd8ff;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 189px;

  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;

  padding: 14px 28px;
  margin-bottom: 36px;

  width: 196px;
  height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  color: #373737;
  background-color: ${props => (props.followed ? ' #5CD3A8' : ' #ebd8ff')};
  &:hover {
    background: #5cd3a8;
  }
`;
