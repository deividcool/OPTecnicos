import { useContext } from 'react';
import Mechanic from './assets/Mechanic.svg'
import { AuthContext } from './context/AuthContext';
import CardServices from './componentes/Card';
import './componentes/stylecard.css';
import ModalCambioStatus from './componentes/Modales';

function Workarea() {
    const {
        infotecnico,
        modelo,
        registro,
        orden,
        sede,
        placa,
        vin,
        operaciones,
        propietario,
        aseguradora,
        celular,
        num_operaciones,
    } = useContext(AuthContext);



    return (
        <main className='flex flex-col h-auto'>
            <header className='flex h-12 z-10 w-screen justify-evenly items-center'>
                <img src={Mechanic} className="w-6 h-6" />
                <h1 className="text-xl font-bold text-neutral-800 uppercase tracking-tighter">
                    Operaciones Tecnico
                </h1>
            </header>
            <main className='w-full justify-start flex flex-col pt-10 '>
                <aside className='flex p-2 flex-col w-screen'>
                    <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Informacion Tecnico</h2>
                    <div className='h-px w-20 bg-gray-800'></div>
                    <ul className='w-full columns-2 m-2'>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis'> <strong>nombre:</strong> {infotecnico.nombre}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis'> <strong>sede:</strong> {infotecnico.sede}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis'> <strong>Especialidades:</strong> {infotecnico.Especialidades}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis'> <strong>estado:</strong> {infotecnico.estado}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis'> <strong>Numero Orden:</strong> {orden}</li>
                    </ul>


                </aside>
                <aside className='flex p-2 pt-0 flex-col w-screen'>
                    <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Informacion Cliente</h2>
                    <div className='h-px w-20 bg-gray-800'></div>
                    <ul className='w-full columns-2  flex-1 justify-center items-center p-2'>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis	'> <strong>propietario:</strong> {propietario.replace(/%20/g, " ")}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis'> <strong>vin:</strong> {vin}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis	'> <strong>sede:</strong> {sede.replace(/%20/g, " ")}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>placa:</strong> {placa}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>celular:</strong> {celular}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>vehiculo:</strong> {modelo.replace(/%20/g, " ")}</li>
                        <li className='text-xs text-gray-600 mt-px capitalize overflow-hidden text-ellipsis	max-h-11'> <strong>aseguradora:</strong> {aseguradora.replace(/%20/g, " ")}</li>
                    </ul>
                </aside>
                <section className='flex pt-0 flex-col w-screen bg-white'>
                    <h2 className='font-bold tracking-tighter text-lg text-gray-800'>Área Laboral - Numero Ordenes {num_operaciones} </h2>
                    <div className='h-px w-20 bg-gray-800'></div>

                    <div className="horizScroll">
                        {operaciones && operaciones.map((item) => (
                            <CardServices key={item.id_operacion} operaciones={item.id_operacion} nombre_operacion={item.nombre_operacion} buttonstatus={item.botones} status_operacion={item.estado_actual} tiempo_transcurrido={item.tiempo_transcurrido} contar_tiempo={item.contar_tiempo} />
                        ))}
                    </div>

                </section>
            </main>


        </main>

    )
}

export default Workarea