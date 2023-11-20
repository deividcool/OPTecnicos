import { useContext } from 'react';
import './stylecard.css';
import { AuthContext } from '../context/AuthContext';

function ButtonStatus({ status, nombre, id, orden }) {
    const {
        handleidbutton,
    } = useContext(AuthContext)

   
    return (
                status == 'true' && id == '1' ? ( //inicio
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '40px',width: '40px' , display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fillRule="evenodd" clipRule="evenodd" d="M423.016 314.872L185.986 448.385C128.229 480.923 50 446.736 50 389.025V121.981C50 64.2351 128.229 30.0825 185.986 62.6201L423.016 196.134C473.661 224.664 473.661 286.341 423.016 314.872Z" fill="white" />
                        </svg>
                        <span className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '2' ? ( //pausa
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '40px',width: '40px' , display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fillRule="evenodd" clipRule="evenodd" d="M452.667 106.667V405.333C452.667 440.681 424.014 469.333 388.667 469.333H367.333C331.986 469.333 303.333 440.681 303.333 405.333V106.667C303.333 71.3203 331.986 42.6666 367.333 42.6666H388.667C424.014 42.6666 452.667 71.3205 452.667 106.667Z" fill="#277EFF" stroke="#277EFF" stroke-width="10.6667" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M135.667 42.6666C171.013 42.6666 199.667 71.3205 199.667 106.667V405.333C199.667 440.681 171.013 469.333 135.667 469.333H114.333C78.9874 469.333 50.3335 440.681 50.3335 405.333V106.667C50.3335 71.3203 78.9874 42.6666 114.333 42.6666H135.667Z" fill="#277EFF" stroke="#277EFF" stroke-width="10.6667" />
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '3' ? (//pausa intermedia
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{  height: '40px',width: '30px' ,display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center', margin: '12px', lineHeight: '6px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fillRule="evenodd" clipRule="evenodd" d="M452.667 106.667V405.333C452.667 440.681 424.014 469.333 388.667 469.333H367.333C331.986 469.333 303.333 440.681 303.333 405.333V106.667C303.333 71.3203 331.986 42.6666 367.333 42.6666H388.667C424.014 42.6666 452.667 71.3205 452.667 106.667Z" fill="yellow" stroke="yellow" stroke-width="10.6667" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M135.667 42.6666C171.013 42.6666 199.667 71.3205 199.667 106.667V405.333C199.667 440.681 171.013 469.333 135.667 469.333H114.333C78.9874 469.333 50.3335 440.681 50.3335 405.333V106.667C50.3335 71.3203 78.9874 42.6666 114.333 42.6666H135.667Z" fill="yellow" stroke="yellow" stroke-width="10.6667" />
                        </svg>
                        <span className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '4' ? ( //fin
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '40px',width: '40px' ,  display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M112 64H400C426.5 64 448 85.5 448 112V400C448 426.5 426.5 448 400 448H112C85.5 448 64 426.5 64 400V112C64 85.5 85.5 64 112 64Z" fill="#83BD6F" />
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '5' ? ( //Reanudar
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '40px',width: '40px' , display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fillRule="evenodd" clipRule="evenodd" d="M423.016 314.872L185.986 448.385C128.229 480.923 50 446.736 50 389.025V121.981C50 64.2351 128.229 30.0825 185.986 62.6201L423.016 196.134C473.661 224.664 473.661 286.341 423.016 314.872Z" fill="white" />
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '6' ? ( //Imprevisto
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{  height: '40px',width: '40px' ,display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fillRule="evenodd" clipRule="evenodd" d="M234.667 277.333C234.667 289.116 244.218 298.667 256 298.667C267.783 298.667 277.334 289.116 277.334 277.333V213.333C277.334 201.551 267.783 192 256 192C244.218 192 234.667 201.551 234.667 213.333V277.333ZM277.334 341.094C277.334 329.312 267.783 319.761 256 319.761C244.218 319.761 234.667 329.312 234.667 341.094V341.333C234.667 353.116 244.218 362.667 256 362.667C267.783 362.667 277.334 353.116 277.334 341.333V341.094ZM200.05 99.4423C224.435 55.5505 287.559 55.5505 311.943 99.4423L452.764 352.919C476.461 395.578 445.615 448 396.817 448H115.176C66.3765 448 35.5307 395.578 59.2294 352.919L200.05 99.4423Z" fill="#F3565D" />
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '7' ? ( //Devolucion
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{  height: '40px',width: '40px' ,display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M106.667 234.667V256C106.667 338.347 173.654 405.333 256 405.333C338.347 405.333 405.334 338.347 405.334 256C405.334 173.653 338.347 106.667 256 106.667H213.334V42.6667L128 128L213.334 213.333V149.333H256C314.816 149.333 362.667 197.184 362.667 256C362.667 314.816 314.816 362.667 256 362.667C197.184 362.667 149.334 314.816 149.334 256V234.667H106.667Z" fill="#F3565D"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '8' ? ( //Finalizado
                    <button disabled style={{ height: '40px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 214C0.666992 96.1792 96.1795 0.666626 214 0.666626C331.82 0.666626 427.334 96.1792 427.334 214C427.334 331.82 331.82 427.333 214 427.333C96.1795 427.333 0.666992 331.82 0.666992 214ZM293.085 156.248C301.416 164.58 301.416 178.087 293.085 186.418L214.519 264.984C202.45 277.053 182.884 277.053 170.815 264.984L134.915 229.085C126.584 220.754 126.584 207.246 134.915 198.915C143.247 190.584 156.754 190.584 165.085 198.915L192.667 226.497L262.915 156.248C271.246 147.917 284.754 147.917 293.085 156.248Z" fill="#37DF53"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '9' ? ( //Imprevisto Detiene
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '40px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 214C0.666992 96.1792 96.1795 0.666626 214 0.666626C331.82 0.666626 427.334 96.1792 427.334 214C427.334 331.82 331.82 427.333 214 427.333C96.1795 427.333 0.666992 331.82 0.666992 214ZM293.085 156.248C301.416 164.58 301.416 178.087 293.085 186.418L214.519 264.984C202.45 277.053 182.884 277.053 170.815 264.984L134.915 229.085C126.584 220.754 126.584 207.246 134.915 198.915C143.247 190.584 156.754 190.584 165.085 198.915L192.667 226.497L262.915 156.248C271.246 147.917 284.754 147.917 293.085 156.248Z" fill="#37DF53"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '10' ? (//Devuelto
                    <button disabled style={{ height: '40px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                       <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="64" y="64" width="384" height="384" rx="30" fill="#455CD0"/>
                            <path d="M213.148 235.352C213.148 228.926 210.756 225.713 205.971 225.713C203.92 225.713 201.072 226.465 197.426 227.969L188.334 231.729V258.457C204.877 252.305 213.148 244.603 213.148 235.352ZM253.754 236.514C253.754 251.097 246.553 262.673 232.152 271.24L261.82 310H207.816L188.607 278.35V310H143.969V200.83C172.862 198.779 191.798 197.754 200.775 197.754C209.753 197.754 216.589 198.301 221.283 199.395C234.226 202.357 243.477 208.691 249.037 218.398C252.136 223.958 253.708 229.997 253.754 236.514ZM275.082 201.104C297.686 198.87 314.776 197.754 326.352 197.754C337.927 197.754 347.087 198.597 353.832 200.283C360.622 201.969 366.205 204.59 370.58 208.145C379.057 215.072 383.295 226.442 383.295 242.256C383.295 249.365 381.951 255.882 379.262 261.807C376.573 267.731 372.904 272.812 368.256 277.051C363.607 281.289 358.161 284.593 351.918 286.963C345.674 289.333 338.998 290.518 331.889 290.518L319.721 290.244V310H275.082V201.104ZM336.674 226.123C332.755 226.123 327.012 228.835 319.447 234.258V260.029L327.445 256.133C332.732 253.535 336.423 251.051 338.52 248.682C342.439 244.261 344.398 239.863 344.398 235.488C344.398 231.113 342.917 228.219 339.955 226.807C338.998 226.351 337.904 226.123 336.674 226.123Z" fill="white"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '11' ? ( //Inicio Reproceso
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '60px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="64" y="64" width="384" height="384" rx="30" fill="#D04545"/>
                            <path d="M213.148 235.352C213.148 228.926 210.756 225.713 205.971 225.713C203.92 225.713 201.072 226.465 197.426 227.969L188.334 231.729V258.457C204.877 252.305 213.148 244.603 213.148 235.352ZM253.754 236.514C253.754 251.097 246.553 262.673 232.152 271.24L261.82 310H207.816L188.607 278.35V310H143.969V200.83C172.862 198.779 191.798 197.754 200.775 197.754C209.753 197.754 216.589 198.301 221.283 199.395C234.226 202.357 243.477 208.691 249.037 218.398C252.136 223.958 253.708 229.997 253.754 236.514ZM275.082 201.104C297.686 198.87 314.776 197.754 326.352 197.754C337.927 197.754 347.087 198.597 353.832 200.283C360.622 201.969 366.205 204.59 370.58 208.145C379.057 215.072 383.295 226.442 383.295 242.256C383.295 249.365 381.951 255.882 379.262 261.807C376.573 267.731 372.904 272.812 368.256 277.051C363.607 281.289 358.161 284.593 351.918 286.963C345.674 289.333 338.998 290.518 331.889 290.518L319.721 290.244V310H275.082V201.104ZM336.674 226.123C332.755 226.123 327.012 228.835 319.447 234.258V260.029L327.445 256.133C332.732 253.535 336.423 251.051 338.52 248.682C342.439 244.261 344.398 239.863 344.398 235.488C344.398 231.113 342.917 228.219 339.955 226.807C338.998 226.351 337.904 226.123 336.674 226.123Z" fill="white"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.5rem' }}>{nombre}</span>
                    </button>
                ): status == 'true' && id == '12' ? ( //Fin Reproceso
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '60px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fillRule="evenodd" clipRule="evenodd" d="M452.667 106.667V405.333C452.667 440.681 424.014 469.333 388.667 469.333H367.333C331.986 469.333 303.333 440.681 303.333 405.333V106.667C303.333 71.3203 331.986 42.6666 367.333 42.6666H388.667C424.014 42.6666 452.667 71.3205 452.667 106.667Z" fill="red" stroke="red" stroke-width="10.6667" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M135.667 42.6666C171.013 42.6666 199.667 71.3205 199.667 106.667V405.333C199.667 440.681 171.013 469.333 135.667 469.333H114.333C78.9874 469.333 50.3335 440.681 50.3335 405.333V106.667C50.3335 71.3203 78.9874 42.6666 114.333 42.6666H135.667Z" fill="red" stroke="red" stroke-width="10.6667" />
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.4rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '13' ? ( //Pausa Repuestos Rojo
                    <button onClick={() => handleidbutton(id, orden, nombre)} style={{ height: '60px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M304.614 45.9144C296.715 42.6666 286.699 42.6666 266.667 42.6666C246.635 42.6666 236.619 42.6666 228.719 45.9144C218.184 50.2449 209.815 58.551 205.452 69.0054C203.46 73.7779 202.68 79.328 202.375 87.4237C201.927 99.3211 195.779 110.334 185.39 116.286C175.001 122.239 162.318 122.017 151.712 116.454C144.494 112.668 139.262 110.563 134.101 109.888C122.797 108.411 111.364 111.451 102.318 118.34C95.5336 123.507 90.5256 132.115 80.5098 149.332C70.494 166.549 65.4862 175.157 64.3701 183.571C62.8817 194.79 65.9451 206.137 72.8864 215.115C76.0546 219.213 80.507 222.656 87.4176 226.965C97.5767 233.301 104.113 244.094 104.113 256C104.112 267.906 97.5756 278.696 87.4176 285.03C80.506 289.342 76.0526 292.787 72.8842 296.885C65.943 305.862 62.8797 317.207 64.368 328.427C65.4841 336.841 70.4921 345.451 80.5077 362.667C90.5235 379.883 95.5315 388.493 102.316 393.658C111.362 400.546 122.794 403.586 134.099 402.11C139.259 401.436 144.492 399.33 151.708 395.546C162.315 389.982 174.999 389.76 185.389 395.712C195.779 401.666 201.927 412.678 202.375 424.578C202.68 432.672 203.46 438.223 205.452 442.995C209.815 453.449 218.184 461.756 228.719 466.086C236.619 469.333 246.635 469.333 266.667 469.333C286.699 469.333 296.715 469.333 304.614 466.086C315.149 461.756 323.518 453.449 327.881 442.995C329.873 438.223 330.654 432.672 330.959 424.576C331.407 412.678 337.553 401.666 347.942 395.712C358.332 389.758 371.016 389.982 381.623 395.546C388.84 399.33 394.071 401.434 399.232 402.108C410.537 403.586 421.969 400.546 431.014 393.658C437.801 388.491 442.807 379.883 452.823 362.665C462.839 345.449 467.846 336.841 468.964 328.427C470.451 317.207 467.388 305.86 460.448 296.883C457.278 292.785 452.826 289.34 445.914 285.03C435.757 278.696 429.22 267.904 429.22 255.998C429.22 244.092 435.757 233.303 445.914 226.97C452.828 222.658 457.28 219.215 460.45 215.115C467.39 206.138 470.453 194.792 468.966 183.573C467.848 175.158 462.842 166.55 452.826 149.333C442.81 132.117 437.803 123.508 431.016 118.342C421.971 111.453 410.539 108.413 399.234 109.89C394.074 110.564 388.841 112.669 381.626 116.454C371.019 122.018 358.334 122.24 347.945 116.287C337.555 110.334 331.407 99.3207 330.957 87.4227C330.652 79.3275 329.873 73.7777 327.881 69.0054C323.518 58.551 315.149 50.2449 304.614 45.9144ZM266.667 320C302.283 320 331.153 291.347 331.153 256C331.153 220.653 302.283 192 266.667 192C231.051 192 202.179 220.653 202.179 256C202.179 291.347 231.051 320 266.667 320Z" fill="#DA3434"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.4rem' }}>{nombre}</span>
                    </button>
                ) : status == 'true' && id == '14' ? ( //Bloqueado Repuestos Amarillo
                    <button disabled style={{ height: '60px',width: '40px',display: 'flex', flexDirection: 'column' , padding: '2px', justifyContent:'center', alignItems:'center',  margin: '4px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M304.614 45.9144C296.715 42.6666 286.699 42.6666 266.667 42.6666C246.635 42.6666 236.619 42.6666 228.719 45.9144C218.184 50.2449 209.815 58.551 205.452 69.0054C203.46 73.7779 202.68 79.328 202.375 87.4237C201.927 99.3211 195.779 110.334 185.39 116.286C175.001 122.239 162.318 122.017 151.712 116.454C144.494 112.668 139.262 110.563 134.101 109.888C122.797 108.411 111.364 111.451 102.318 118.34C95.5336 123.507 90.5256 132.115 80.5098 149.332C70.494 166.549 65.4862 175.157 64.3701 183.571C62.8817 194.79 65.9451 206.137 72.8864 215.115C76.0546 219.213 80.507 222.656 87.4176 226.965C97.5767 233.301 104.113 244.094 104.113 256C104.112 267.906 97.5756 278.696 87.4176 285.03C80.506 289.342 76.0526 292.787 72.8842 296.885C65.943 305.862 62.8797 317.207 64.368 328.427C65.4841 336.841 70.4921 345.451 80.5077 362.667C90.5235 379.883 95.5315 388.493 102.316 393.658C111.362 400.546 122.794 403.586 134.099 402.11C139.259 401.436 144.492 399.33 151.708 395.546C162.315 389.982 174.999 389.76 185.389 395.712C195.779 401.666 201.927 412.678 202.375 424.578C202.68 432.672 203.46 438.223 205.452 442.995C209.815 453.449 218.184 461.756 228.719 466.086C236.619 469.333 246.635 469.333 266.667 469.333C286.699 469.333 296.715 469.333 304.614 466.086C315.149 461.756 323.518 453.449 327.881 442.995C329.873 438.223 330.654 432.672 330.959 424.576C331.407 412.678 337.553 401.666 347.942 395.712C358.332 389.758 371.016 389.982 381.623 395.546C388.84 399.33 394.071 401.434 399.232 402.108C410.537 403.586 421.969 400.546 431.014 393.658C437.801 388.491 442.807 379.883 452.823 362.665C462.839 345.449 467.846 336.841 468.964 328.427C470.451 317.207 467.388 305.86 460.448 296.883C457.278 292.785 452.826 289.34 445.914 285.03C435.757 278.696 429.22 267.904 429.22 255.998C429.22 244.092 435.757 233.303 445.914 226.97C452.828 222.658 457.28 219.215 460.45 215.115C467.39 206.138 470.453 194.792 468.966 183.573C467.848 175.158 462.842 166.55 452.826 149.333C442.81 132.117 437.803 123.508 431.016 118.342C421.971 111.453 410.539 108.413 399.234 109.89C394.074 110.564 388.841 112.669 381.626 116.454C371.019 122.018 358.334 122.24 347.945 116.287C337.555 110.334 331.407 99.3207 330.957 87.4227C330.652 79.3275 329.873 73.7777 327.881 69.0054C323.518 58.551 315.149 50.2449 304.614 45.9144ZM266.667 320C302.283 320 331.153 291.347 331.153 256C331.153 220.653 302.283 192 266.667 192C231.051 192 202.179 220.653 202.179 256C202.179 291.347 231.051 320 266.667 320Z" fill="#BEDA34"/>
                        </svg>
                        <span  className='line-clamp-2 font-bold tracking-tighter text-white' style={{ fontSize: '0.4rem' }}>{nombre}</span>
                    </button>
                ) : null
    )
}




export default ButtonStatus;    