import React from 'react'
// import { Modal } from "../../components/modal/Modal";
// import Overlay from "../.././components/Overlay";
// import Notes from "../Notes";

const NoteMenu = ({onDelete}) => {
  return (
    <>
    
    <div>
        <ul>
            <li>Edit</li>
           
           <Modal>
            <li onClick={onDelete}>Delete</li>
            </Modal>
            
        </ul>
    </div>
    </>
  )
}

export default NoteMenu