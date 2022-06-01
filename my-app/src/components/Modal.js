function Modal(props){
    function cancelModal(){
        props.onCancel();
    }
    return (<div className='modal'>
        <p>Are you sure you want</p>
        <button className='btn btn-alt' onClick={cancelModal}>Cancel</button>
        <button className= 'btn'>confirm</button>
    </div>
    )
}

export default Modal;