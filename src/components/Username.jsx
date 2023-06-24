import { Link } from 'react-router-dom';
import blnr from './blnr.png'
const Username = () => {

   
    return (
        <div className='username'>
        <div style={{ padding: '5px',  color: 'white'}}>
        <div >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px', marginLeft: '110px', marginBottom: '60px' }} >
                <img src={blnr} alt="" height={20}  />  
            </Link>
        </div>
    
        <div style={{ paddingTop:'40px', paddingBottom:'220px', paddingLeft:'3vh', paddingRight: '3vh'}}>
            <form action="/url" method="GET" style={{ paddingLeft: '30px'}}>
                <h4 style={{ marginLeft: '-7px'}}>Choose your username</h4>
                <input type="text" style={{ height: '40px', width: '150px', background: '#D9D9D9', borderRadius: '10px' }} />
            </form>
            <button style={{background: 'white', color: '#111111', height: '40px', padding: '2px', fontWeight: 'bold', marginLeft: '10px'}}><Link to= "./dashboard" style = {{ background: '' ,textDecoration: 'none', color: '#181818', width: '100px', padding: '10px', marginLeft: '15px'}}>Save</Link></button>
            </div>

        <div style={{textAlign: '',  color: 'white', marginLeft: '85px', marginRight: '20px', paddingBotton: '0px'}}>
             <p>(c) BLNR 2023</p>
        </div>
    </div>
    </div>
    )
  }
  
  export default Username