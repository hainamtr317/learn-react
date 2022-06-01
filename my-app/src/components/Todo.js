import { useState } from 'react';
import Modal from "./Modal";
import Backdorp from "./Backdorp";

function Todo(Props){
 const [Modalisopen,modalopen] = useState(false);
    function openModal(){
        modalopen(true);
    }
    function closeModal(){
        modalopen(false);
    }
return (
    <div className='card'>
    <h2>{Props.Text}</h2>
    <div className='actions'>
    <button className='btn' onClick={openModal}>Delete</button>

</div>
{Modalisopen && <Modal/>}
{Modalisopen && <Backdorp onCancel={closeModal}/>}
</div>)
}
export default Todo;
