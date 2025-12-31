import './style.css'

export default function Loader({ show }){
    return(
        <div className={`loader show`}>
            <div className='center'>
                {/* <div className="text">Carregando...</div> */}
                <div className="ring"></div>
            </div>
        </div>
    )
}