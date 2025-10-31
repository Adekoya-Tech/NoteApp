import styled from 'styled-components';

export const NotesContainer = styled.div`
  padding-top: 130px;
  background-color: #cddbdb70;
  /* background-color: #fff; */
  /* margin: 20px; */
  /* max-width: 800px; */
  width: 100%;
  /* padding: 80px; */
`;


export const NotesWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const NoteReadContainer = styled.div`
	background-color: #fff;
	max-width: 900px;
	width: 100%;
	padding: 80px;
	margin: 20px;
	border-radius: 20px;

  div {
    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export const NotesWarningText = styled.div`
  width: 100%;
  /* height: 100vh; */
	display: flex;
  flex-direction: column;
	justify-content: center;
  align-items: center;
  text-align: center;
  /* height: 100%; */
  background-color: #fff;

  h4 {
    font-size: 30px;
    text-align: center;
  }
`;
