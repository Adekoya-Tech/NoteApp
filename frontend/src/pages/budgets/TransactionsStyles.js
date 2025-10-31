import styled, { css } from 'styled-components';
import pix1 from '../../assets/pix.png'

export const TransactionsContainer = styled.div`
  width: 100%;
  height: 50vh;
  background:url(${pix1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TransactionsInfo = styled.div`
  max-width: 600px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
`;

export const TransactionsTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const TransactionsSubTitle = styled.h4`
	text-align: center;
	color: green;
	background-color: #fff;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
  font-size: 22px;

	${(props) =>
		props.expenses &&
		css`
			color: red;
		`}
`;
