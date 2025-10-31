import styled, { css } from 'styled-components';

export const NavContainer = styled.nav`
	height: 100%;

	@media screen and (max-width: 750px) {
		display: none;
	}
`;

export const NavWrapper = styled.div`
	display: flex;
	align-content: center;
`;

export const NavButton = styled.button`
	width: 130px;
	/* height: 40px; */

	font-size: 16px;
	text-transform: uppercase;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: bold;
		width: 100%;
		padding: 15px 20px;
	}

	${(props) =>
		props.primary &&
		css`
			background: var(--color-primary);
			border-top-left-radius: 50px;
			border-bottom-left-radius: 50px;
			&:hover {
				opacity: 0.7;
			}
		`}

	${(props) =>
		props.secondary &&
		css`
			background: var(--color-secondary);
			border-top-right-radius: 50px;
			border-bottom-right-radius: 50px;
			&:hover {
				opacity: 0.7;
			}
		`}
`;

export const UserDetailsBox = styled.div`
	position: relative;
	width: 200px;

	h4 {
		display: flex;
		align-items: center;
		font-size: 20px;
		color: var(--color-secondary);
		transition: 0.6s ease all;
		cursor: pointer;
		gap: 5px;
	}

	&:hover {
		color: var(--color-primary);
		svg {
			transform: rotate(180deg);
		}

		& > div {
			display: flex;
		}
	}
`;

export const UserDetails = styled.div`
 width: 100%;
 background-color: var(--color-primary);
 padding: 20px;
 display: flex;
 flex-direction: column;
 gap: 20px;
 margin-top: 10px;
 display: none;

 a {
	color: #fff;
	font-weight: bold;

 }
`;
