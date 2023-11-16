import { useContext, useState } from 'react';
import './stylecard.css';
import { AuthContext } from '../context/AuthContext';

export function ModalCambioStatus() {
    const [motivoSeleccionado, setMotivoSeleccionado] = useState('');
    const {
        abrirModal,
        handleclosemodal,
        contentmodal,
        handleconfirmarmotivopausa,
    } = useContext(AuthContext)

    const [motivosSeleccionados, setMotivosSeleccionados] = useState('');

    const handleMotivoSeleccionado = (motivoId) => {
        // Verificar si el motivo ya está seleccionado
        if (motivosSeleccionados.includes(motivoId)) {
            // Si ya está seleccionado, lo eliminamos
            const updatedMotivos = motivosSeleccionados
                .split(',')
                .filter((id) => id !== motivoId)
                .join(',');
    
            setMotivosSeleccionados(updatedMotivos);
        } else {
            // Si no está seleccionado, lo añadimos
            const updatedMotivos = motivosSeleccionados
                ? `${motivosSeleccionados},${motivoId}`
                : motivoId.toString();
    
            setMotivosSeleccionados(updatedMotivos);
        }
    };

    console.log(contentmodal.multiple)

    return (
        abrirModal ? (
            <div className='fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
                <div className='relative w-11/12 h-2/5 z-10 bg-white p-4 rounded-lg shadow-md'>
                    <button className='absolute right-3 top-1' onClick={() => handleclosemodal()}>
                        <h1 className='text-lg text-cyan-600'>x</h1>
                    </button>
                    <section className='flex mt-8 flex-col'>
                        <h1 className='text-xs uppercase tracking-tighter'>{contentmodal.mensaje}</h1>


                        {contentmodal.multiple == "false" ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                <span className='text-black tracking-tighter mt-4 text-xs font-bold'>Motivo:</span>
                                <div className='flex w-full flex-col justify-center items-center'>
                                    <div className="grid grid-cols-2 gap-2 w-3/4">
                                        {contentmodal && contentmodal.motivos.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => handleMotivoSeleccionado(item.id)}
                                                className={`flex w-full h-12 justify-start items-center hover:bg-gray-100 p-4 rounded-lg ${motivosSeleccionados.includes(item.id) ? 'bg-slate-100' : ''}`}
                                            >
                                                <div className='flex h-3 w-3 justify-center items-center rounded-full bg-transparent border border-slate-600 mr-4'>
                                                    <div className={`h-1.5 w-1.5  rounded-full ${motivosSeleccionados.includes(item.id) ? 'bg-slate-600' : ''}`}>
                                                    </div>
                                                </div>
                                                <h1 className='text-xs text-slate-600'>{item.nombre}</h1>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </section>
                    {contentmodal.multiple == "false" ? (
                        <button onClick={() => handleconfirmarmotivopausa(motivoSeleccionado)} className='absolute bottom-2 right-2 m-auto bg-cyan-400 p-1 outline-none rounded-md uppercase text-slate-50 font-extrabold text-xs'>
                            <span className='text-xs text-white'>confirmar</span>
                        </button>
                    ) : (
                        <button onClick={() => handleconfirmarmotivopausa(motivosSeleccionados)} className='absolute bottom-2 right-2 m-auto bg-cyan-400 p-1 outline-none rounded-md uppercase text-slate-50 font-extrabold text-xs'>
                            <span className='text-xs text-white'>confirmar</span>
                        </button>
                    )}
                </div>
            </div>
        ) : null
    )
}



export function ConfirmacionDialog({ mensaje,status}) {
    const {
        handleclosemodal,
        handleConfirmar,
        handleCancelar,
    } = useContext(AuthContext)
    console.log(status)
    return (
        status ? (
            <div className='fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center animate-jump-in'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 animate-jump-in'></div>
                <div className='relative w-11/12 h-2/5 z-10 bg-white p-4 rounded-lg shadow-md animate-jump-in'>
                    <button className='absolute right-3 top-1' onClick={() => handleclosemodal()}>
                        <h1 className='text-lg text-cyan-600'>x</h1>
                    </button>
                    <p className='text-xl text-slate-800 font-extrabold mt-8'>¿Estás seguro de realizar la acción de {mensaje}?</p>
                    <button className='absolute bottom-2 right-2 m-auto bg-cyan-400 p-1 outline-none rounded-md uppercase text-slate-50 font-extrabold text-xs' onClick={()=>handleConfirmar()}>Confirmar</button>
                    <button className='absolute bottom-2 right-24 m-auto  p-1  outline-none uppercase text-slate-950 font-extrabold text-xs' onClick={()=>handleCancelar()}>Cancelar</button>
                </div>
            </div>
        ): null
    );
  };

