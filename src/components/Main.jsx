import { Link } from 'react-router-dom';
import { blnr } from '../blnr.png';
const Main = () => {

   
    return (
        <div >
        <div style={{ padding: '10px',  color: 'white,', paddingLeft: '30px'}}>
           
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }} >
                <img src={blnr} alt="logo" height={55} /> 
            </Link>
        
            <div style={{ background: 'white', color: '#111111', borderRadius: '25px', paddingTop:'40px', paddingBottom:'200px', paddingLeft:'8vh', paddingRight: '3vh', width: '25vh'}}>
                <form action="/url" method="GET">
                    <p>Input your BLNR Code</p>
                    <input type="text" style={{ height: '40px', width: '150px', background: '#D9D9D9', borderRadius: '10px' }} />
                    
                </form>
                <button >
                    <Link to= "./Welcome" style = {{ background: '#FF9C00' ,textDecoration: 'none', color: 'white', width: '100px', padding: '10px', marginLeft: '10px'}}>Login</Link>
                </button>
            </div>

            <div style={{textAlign: 'center', position:'absolute' , bottom: '0', color: 'white', marginLeft: '120px', marginRight: '-120px', paddingBotton: '80px'}}>
                <p>(c) BLNR 2023</p>
            </div>
        </div>

        </div>
        
    )
  }
  
  export default Main