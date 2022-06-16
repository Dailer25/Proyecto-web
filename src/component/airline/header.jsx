
const style={
    color:'black',
    background:'#f7f2f3',
    borderRadius:'6px',
    font:'OpenSans',
};

const Header = ({formFly})=>{
    
    return(
        <>
            <div style={style} className="row justify-content-center">
                <div  className="col-3">
                    From<br></br>
                    {formFly.name}  
                </div>
                <div className="col-3">
                    To<br></br>
                    {formFly.name2}
                </div>
                <div className="col-3">
                    Date<br></br>
                    {formFly.date}
                </div>
            </div>
        </>
    )
}

export default Header