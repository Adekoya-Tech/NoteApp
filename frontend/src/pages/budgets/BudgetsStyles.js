import styled, {css} from "styled-components";

export const BudgetsContainer = styled.div`
  padding-top: 100px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const ListContainer = styled.div`
	width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
`;

export const ListItemContainer = styled.div`
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  padding: 10px;

  h4 {
    text-align: center;
    font-size: 20px;
    padding-bottom: 30px;
    color: green;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    text-transform: capitalize;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      background-color: green;
      height: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      div {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 18px;
      }
    }
  }

  ${props => props.expenses && css`
    h4 {
      color: red;
    }

    ul li {
      background-color: red;
    }

  `}
`;