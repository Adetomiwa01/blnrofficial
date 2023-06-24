
const Username = () => {

   
    return (
        <div style={{ padding: '80px',  color: 'white'}}>
        <div >
            
        </div>
    
        <div style={{ paddingTop:'40px', paddingBottom:'200px', paddingLeft:'3vh', paddingRight: '3vh'}}>
            <form action="/url" method="GET">
                <p>Choose your username</p>
                <input type="text" style={{ height: '40px', width: '150px', background: '#D9D9D9'
, borderRadius: '10px' }} />
            </form>
            <button style={{background: 'white', color: '#111111'
}}>Save</button>
        </div>

        <div style={{textAlign: 'center', position:'absolute' , bottom: '0'}}>
            <p>(c) BLNR 2023</p>
        </div>
    </div>

    )
  }
  
  export default Username