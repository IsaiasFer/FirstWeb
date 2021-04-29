import React from 'react'

import Modal from './modal'

function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
            <h1>Estas Seguro?</h1>
            <p>Estas a punto de eliminar este badge</p>
            <div>
                <button onClick={props.onDeleteBadge} className="deleteButton">Borrar</button>
                <button onClick={props.onClose} className="cancelButton">cancelar</button>
            </div>

        </div>
    </Modal>
}

export default DeleteBadgeModal