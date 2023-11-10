import { useContext } from 'react';
import './stylecard.css';
import { AuthContext } from '../context/AuthContext';

function ButtonStatus({ status, nombre, id, orden }) {
    const {
        handleidbutton,
    } = useContext(AuthContext)

   
    return (
     
            status == 'true' && nombre == 'Inicio' ? (
                <button onClick={() => handleidbutton(id, orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fillRule="evenodd" clipRule="evenodd" d="M423.016 314.872L185.986 448.385C128.229 480.923 50 446.736 50 389.025V121.981C50 64.2351 128.229 30.0825 185.986 62.6201L423.016 196.134C473.661 224.664 473.661 286.341 423.016 314.872Z" fill="white" />
                    </svg>
                    <span className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : status == 'true' && nombre == 'Pausa' ? (
                <button onClick={() => handleidbutton(id, orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fillRule="evenodd" clipRule="evenodd" d="M452.667 106.667V405.333C452.667 440.681 424.014 469.333 388.667 469.333H367.333C331.986 469.333 303.333 440.681 303.333 405.333V106.667C303.333 71.3203 331.986 42.6666 367.333 42.6666H388.667C424.014 42.6666 452.667 71.3205 452.667 106.667Z" fill="#277EFF" stroke="#277EFF" stroke-width="10.6667" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M135.667 42.6666C171.013 42.6666 199.667 71.3205 199.667 106.667V405.333C199.667 440.681 171.013 469.333 135.667 469.333H114.333C78.9874 469.333 50.3335 440.681 50.3335 405.333V106.667C50.3335 71.3203 78.9874 42.6666 114.333 42.6666H135.667Z" fill="#277EFF" stroke="#277EFF" stroke-width="10.6667" />
                    </svg>
                    <span  className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : status == 'true' && nombre == 'Pausa Intermedia' ? (
                <button onClick={() => handleidbutton(id, orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center', margin: '12px', width: '20px', lineHeight: '6px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fillRule="evenodd" clipRule="evenodd" d="M452.667 106.667V405.333C452.667 440.681 424.014 469.333 388.667 469.333H367.333C331.986 469.333 303.333 440.681 303.333 405.333V106.667C303.333 71.3203 331.986 42.6666 367.333 42.6666H388.667C424.014 42.6666 452.667 71.3205 452.667 106.667Z" fill="yellow" stroke="yellow" stroke-width="10.6667" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M135.667 42.6666C171.013 42.6666 199.667 71.3205 199.667 106.667V405.333C199.667 440.681 171.013 469.333 135.667 469.333H114.333C78.9874 469.333 50.3335 440.681 50.3335 405.333V106.667C50.3335 71.3203 78.9874 42.6666 114.333 42.6666H135.667Z" fill="yellow" stroke="yellow" stroke-width="10.6667" />
                    </svg>
                    <span className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : status == 'true' && nombre == 'Fin' ? (
                <button onClick={() => handleidbutton(id, orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M112 64H400C426.5 64 448 85.5 448 112V400C448 426.5 426.5 448 400 448H112C85.5 448 64 426.5 64 400V112C64 85.5 85.5 64 112 64Z" fill="#83BD6F" />
                    </svg>
                    <span  className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : status == 'true' && nombre == 'Reanudar' ? (
                <button onClick={() => handleidbutton(id, orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fillRule="evenodd" clipRule="evenodd" d="M423.016 314.872L185.986 448.385C128.229 480.923 50 446.736 50 389.025V121.981C50 64.2351 128.229 30.0825 185.986 62.6201L423.016 196.134C473.661 224.664 473.661 286.341 423.016 314.872Z" fill="white" />
                    </svg>
                    <span  className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : status == 'true' && nombre == 'Imprevisto' ? (
                <button onClick={() => handleidbutton(id, orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fillRule="evenodd" clipRule="evenodd" d="M234.667 277.333C234.667 289.116 244.218 298.667 256 298.667C267.783 298.667 277.334 289.116 277.334 277.333V213.333C277.334 201.551 267.783 192 256 192C244.218 192 234.667 201.551 234.667 213.333V277.333ZM277.334 341.094C277.334 329.312 267.783 319.761 256 319.761C244.218 319.761 234.667 329.312 234.667 341.094V341.333C234.667 353.116 244.218 362.667 256 362.667C267.783 362.667 277.334 353.116 277.334 341.333V341.094ZM200.05 99.4423C224.435 55.5505 287.559 55.5505 311.943 99.4423L452.764 352.919C476.461 395.578 445.615 448 396.817 448H115.176C66.3765 448 35.5307 395.578 59.2294 352.919L200.05 99.4423Z" fill="#F3565D" />
                    </svg>
                    <span  className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : status == 'true' && nombre == 'Reproceso' ? (
                <button onClick={() => handleidbutton(id,orden)} style={{  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M106.667 234.667V256C106.667 338.347 173.654 405.333 256 405.333C338.347 405.333 405.334 338.347 405.334 256C405.334 173.653 338.347 106.667 256 106.667H213.334V42.6667L128 128L213.334 213.333V149.333H256C314.816 149.333 362.667 197.184 362.667 256C362.667 314.816 314.816 362.667 256 362.667C197.184 362.667 149.334 314.816 149.334 256V234.667H106.667Z" fill="#F3565D"/>
                    </svg>
                    <span  className='line-clamp-2 font-bold tracking-tighter' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                </button>
            ) : null


    )
}


export default ButtonStatus;    