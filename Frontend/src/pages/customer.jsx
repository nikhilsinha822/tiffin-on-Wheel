const Customer = () => {
    return <div className='frmBAckground' style={{height:"100vh"}}>
        <form>
            <label></label>
            <input type="email" className="reg-input" name="email" placeholder="email"></input>
            <label></label>
            <input className="reg-input" name="contact" placeholder="contact"></input>
            <label></label>
            <input className="reg-input" name="Address" placeholder="Address"></input>
            <button style={{backgroundColor:"blue", color:"white", border:"0", padding:"10px", fontSize:"1rem", borderRadius:"10px"}}>Submit</button>
        </form>
    </div>
}

export default Customer