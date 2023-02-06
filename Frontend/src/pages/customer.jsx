const Customer = () => {
    return <div className='frmBAckground' style={{height:"100vh"}}>
        <form>
            
            <input 
            type="email" 
            className="reg-input" 
            name="email" 
            placeholder="Email"/>
            
            <input 
            className="reg-input" 
            name="contact" 
            placeholder="Contact"/>
            
            <input 
            className="reg-input"
            name="Name"
            placeholder="Name"
            />
            
            <select>
            <option>1</option>
            </select>
            
            <button style={{backgroundColor:"blue", color:"white", border:"0", padding:"10px", fontSize:"1rem", borderRadius:"10px"}}>Submit</button>
        </form>
    </div>
}

export default Customer