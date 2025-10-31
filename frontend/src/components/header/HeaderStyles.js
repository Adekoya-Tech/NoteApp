import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 2000px;
  width: 100%;
  position: fixed;
  height: 80px;
  margin: 0 auto;
  box-shadow: 0px -50px 5px rgba(0,0,0,0.5);
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background: var(--color-medium-blue); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  a {
    /* color: var(--color-white); */
  }
`;


export const SearchBoxWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`;
export const SearchBox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	border-bottom: 1px solid var(--gray);
	padding: 0 10px;

	img {
		width: 25px;
	}

	input {
		padding: 10px;
		&::placeholder {
			color: var(--subtitle-text);
     font-weight: bold;
		}
	}
`;

export const Menu = styled.div`
  cursor: pointer;
  display: none;
  svg {
    // color: var(--color-white);
    font-size: 20px;
  }

  @media screen and (max-width: 750px){
    display: block;
  }
`

export const NavContainer = styled.nav;
