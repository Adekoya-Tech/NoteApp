import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const ModalContainer = styled.div`
	max-width: 700px;
	width: 100%;
	position: absolute;
	top: 100px;
	left: 50%;
	transform: translateX(-50%);
	background: #fff;
	z-index: 9999999;
	border-radius: 20px;
	padding: 50px;
`;

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
		<>
			<ModalContainer>{children}</ModalContainer>
		</>,

		document.getElementById('modal'),
	);
};
