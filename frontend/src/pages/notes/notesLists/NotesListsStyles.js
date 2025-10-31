import styled from 'styled-components';

export const NotesListsContainer = styled.div`
  width: 350px;
  /* padding: 20px; */
  background-color: #fff;
`;

export const NotesListsWrapper = styled.div`
  width: 100%;

`;
export const NotesListsItem = styled.div`
	border-bottom: 2px solid var(--gray);
  padding: 20px;

	h4 {
		font-size: 20px;
		color: var(--subtitle-text);
		font-weight: bold;
		margin-bottom: 10px;
	}

	p {
		font-size: 14px;
		line-height: 22px;
	}
`;

export const NotesListsTimeLineBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
  padding: 5px 0;
  margin-top: 20px;

	button {
    width: 50px;
    height: 30px;
		background-color: #cddbdb70;
		padding: 5px;
		border-radius: 50px;
		border: 1px solid var(--subtitle-text);
    display: flex;
    justify-content: center;
    align-items: center;
	}
`;

// export const NotesListsContainer = styled.div``;
// export const NotesListsContainer = styled.div``;
