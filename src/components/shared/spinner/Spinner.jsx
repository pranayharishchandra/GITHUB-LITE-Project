import './Spinner.css'

function Spinner() {
    return (
        <div className="spinner-container" style={{display:'flex', width:'100vw', height:'50px'}}>

        <div style={{margin:'auto'}}>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        </div>
    )
}

export default Spinner
