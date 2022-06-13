import {useState} from 'react'

const Forms =()=>{

    const [formAir,setformAir] = useState({
            airportDeparture:"",
            airportArrival:"",
            date:""
        });

    const cualname = e =>{
        setformAir({
            ...formAir,
            [e.target.name]:e.target.value
        });
    }
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-auto m-4">
                    <h3>Form</h3>
                </div>
            </div>
            <form>
                
                <div className="row justify-content-center" >
                    <div className="col-auto">
                        <label>Departure Airport</label>
                        <input type="text" className="form-control" name='airportDeparture' onChange={cualname}></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto ">
                        <label>Arrival Airport</label>
                        <input type="text" className="form-control" name='airportArrival' onChange={cualname}></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto ">
                        <label>Pick a date</label>
                        <input type="date" className="form-control" name='date' onChange={cualname}></input>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4'>
                        <button className='btn btn-block btn-danger'>Enviar</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Forms