import styled, { css } from 'styled-components';

export const UserNavContainer = styled.nav`
	width: 100%;
	height: 50px;
	background-color: var(--color-primary);
	background-color: #cddbdb70;
	padding: 0 20px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: space-between;
	align-items: center;
	
`;

export const UserNavWrapper = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
  align-items: center;
	gap: 50px;
`;

export const UserNavLink = styled.li`
	height: 100%;
	a {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--color-secondary);
		height: 100%;
		border-bottom: 3px solid var(--color-secondary);

		svg,
		img {
			color: var(--color-secondary);
		}

		div {
			width: 30px;
			height: 30px;
			background-color: var(--bgColorIcon);
			border-radius: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const UserNavNumOfItemsBox = styled.div`

`
export const NavWrapper = styled.div`
	display: flex;
	align-content: center;
`;

export const NavButton = styled.button`
	/* width: 130px; */
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
		padding: 6px 15px;
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
