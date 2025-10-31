import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: ${(props) =>
		props.color === 'white' ? '#fff' : 'rgba(0, 0, 0, 0.7)'};
	z-index: 555;
`;

const Overlay = ({ onClick, color }) => {
	return <OverlayContainer onClick={onClick} color={color}></OverlayContainer>;
};

export default Overlay;
