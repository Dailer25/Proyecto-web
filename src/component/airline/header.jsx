
const style={
    color:'green'
};

const Header = ({formFly})=>{
    
    return(
        <>
            <div className="row justify-content-center">
                <div style={style} className="col-3">
                    <p>From</p>
                    {formFly.name}  
                </div>
                <div className="col-3">
                    <p>To</p>
                    {formFly.name2}
                </div>
                <div className="col-3">
                    <p>Date</p>
                    {formFly.date}
                </div>
                <div className="col-3">

                </div>
            </div>
        </>
    )
}

export default Header