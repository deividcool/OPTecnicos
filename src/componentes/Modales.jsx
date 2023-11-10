import { useContext, useState } from 'react';
import './stylecard.css';
import { AuthContext } from '../context/AuthContext';

function ModalCambioStatus() {
    const [motivoSeleccionado, setMotivoSeleccionado] = useState('');
    const {
        abrirModal,
        handleclosemodal,
        contentmodal,
        handleconfirmarmotivopausa,
    } = useContext(AuthContext)
   
    return (
        abrirModal ? (
            <div className='fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
                <div className='relative w-11/12 h-2/5 z-10 bg-white p-4 rounded-lg shadow-md'>
                    <button className='absolute right-3 top-1' onClick={()=> handleclosemodal()}>
                        <h1 className='text-lg text-cyan-600'>x</h1>
                    </button>
                    <section className='flex mt-8 flex-col'>
                        <h1 className='text-xs uppercase tracking-tighter'>{contentmodal.mensaje}</h1>                        
                        
                        <span className='text-black tracking-tighter mt-4 text-xs font-bold'>Motivo:</span>
                        <select 
                            value={motivoSeleccionado}
                            onChange={(e) => setMotivoSeleccionado(e.target.value)}
                            className="text-black text-sm border border-gray-300 rounded p-1 outline-none"
                        >
                            <option value="" disabled>Selecciona un motivo</option>
                            {contentmodal && contentmodal.motivos.map((item) => (
                                <option key={item.id} value={item.id} className="text-black text-sm tracking-tighter hover:bg-gray-100">
                                    {item.nombre}
                                </option>
                            ))}
                        </select>
                    </section>
                    <button onClick={()=> handleconfirmarmotivopausa(motivoSeleccionado)} className='absolute bottom-2 right-2 m-auto bg-cyan-400 p-1 pt-0 pb-0 outline-none rounded-lg uppercase'>
                        <span className='text-xs text-white'>confirmar</span>
                    </button>
                </div>
            </div>
        ):null
    )
}


export default ModalCambioStatus; 