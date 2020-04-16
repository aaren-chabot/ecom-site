import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: #000;
  color: #fff;
  border: none;
  
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const invertedStyles = css`
	background-color: #fff;
	color: #000;
	border: 1px solid #000;
	style: inverted;

	&:hover {
		background-color: #000;
		color: #fff;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: #fff;
	style: google;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = props => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}
	if (props.inverted) {
		return invertedStyles;
	}

	return buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;

	${getButtonStyles}
`;
