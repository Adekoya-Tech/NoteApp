import styled from 'styled-components';

export const SignUpSignInContainer = styled.div``;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  background-color: inherit;
  font-size: 20px;
  :hover {
    color: crimson;
  }
`
export const SignUpSignInLogo = styled.div`
	width: 100px;
	margin: auto;
  margin-bottom: 40px;

  img {
    width: 100%;
  }
`;

export const SignUpSignInDetails = styled.div`
	h4 {
		color: var(--color-secondary);
		font-size: 20px;
		margin-bottom: 16px;
	}

	small {
		color: var(--subtitle-text);
		margin-bottom: 16px;
		display: inline-block;
	}
`;
export const SignUpSignInGoogleBox = styled.button`
	width: 100%;
	background-color: inherit;
	border: 2.5px solid var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 0;

	img {
		width: 30px !important;
    display: block;
	}
	span {
		color: var(--color-secondary);
    font-size: 20px;
	}
`;
export const SignUpSignInOrBox = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;

	span {
		color: var(--gray);
    text-transform: uppercase;
	}
`;
export const Form = styled.form`
	width: 100%;

	input {
		width: 100%;
		border: 1px solid var(--gray);
		height: 50px;
		margin: 10px 0;
		padding: 20px;
		border-radius: 10px;
	}

  button {
    width: 100%;
    height: 50px;
    background-color: var(--color-secondary);
    color: #fff;
    text-transform: capitalize;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    /* margin-bottom: 50px; */
    border-radius: 50px;
  }

  small {
    color: var(--gray3);

    a {
      color: var(--color-secondary);
    }
  }
`;
export const SignUpSignInSmall = styled.small`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	color: var(--subtitle-text);
  font-weight: bold;

	a {
		color: var(--color-secondary);
    font-weight: normal;
    padding-left: 3px;
	}
`;
// export const SignUpSignInBoxDetails = styled.div``;
