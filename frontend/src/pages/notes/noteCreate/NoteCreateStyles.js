import styled from "styled-components";

export const NoteCreateContainer = styled.div``;
export const NoteCreateTitle = styled.h4`
  font-size: 20px;
  line-height: 28px;
  color: var(--color-primary);
`;

export const NoteCreateForm = styled.form`
  width: 100%;
  margin-top: 20px;


  div {
    width: 100%;
    label,
    input,
    textarea {
      display: block;
      width: 100%;
    }
    label {
      font-size: 14px;
      padding-bottom: 5px;
      padding-top: 15px;
    }
    input{
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }
    textarea{
        padding: 10px;
        border: 1px solid #ccc;
         height: 200px;
         border-radius: 10px;
        

    }
    }
    button{
        width: 250px;
        height: 50px;
        border-radius: 30px;
        background-color: var(--color-secondary);
        color:#fff;
        transition:0.3s ease-in-out all;
        margin-top:50px;
        margin-bottom:30px;

        &:hover{
            background-color: green;
        }

    }
  
`;
