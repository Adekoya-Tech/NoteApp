import styled, { css } from 'styled-components';
import { images } from '../../components/images';

export const HomeContainer = styled.div`
	padding-top: 100px;
`;
export const HomeWrapper = styled.div`
	max-width: 1800px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	margin-top: 50px;
`;
export const HomeTextContainer = styled.div`
	max-width: 600px;
	width: 100%;

	h1 {
		font-size: 40px;
		line-height: 60px;
	}

	ul {
		margin-top: 50px;

		li {
			display: flex;
			gap: 20px;
      padding: 10px 0;
      span {
        font-size: 20px;
      }
		}
	}

	button {
		margin-top: 100px;

		a {
			width: 200px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 20px;
			border-radius: 50px;
			background: var(--color-secondary);
      color: #fff;
		}
	}
`;
export const HomeGalleryContainer = styled.div`
	max-width: 900px;
	width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;
export const HomePixBox = styled.div`
	position: relative;
	width: 250px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  z-index: 100;

	p {
		width: 100%;
		padding: 20px;
		text-align: center;
		background-color: #fff;
    z-index: 100;
	}
`;
export const HomePixBGBox = styled.div`
	background: url(${images.bgDot});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 150px;
	height: 120px;
	position: absolute;
	z-index: -1;
	overflow: hidden;

	${(props) =>
		props.first &&
		css`
			top: -30px;
			left: -30px;
		`}

	${(props) =>
		props.second &&
		css`
			bottom: -20px;
			left: -30px;
		`}
`;
export const HomePix = styled.div`
  width: 100%;
  height: 200px;
  z-index: 100;

  img {
    width: 100%;
    height: 100%;
  }


`;
export const HomePixBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 150px;
`;
