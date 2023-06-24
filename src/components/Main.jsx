import { Link } from 'react-router-dom';
import blnr from './blnr.png';
const Main = () => {

   
    return (
        <div  className='mainFull'>
        <div style={{ color: 'white,', paddingLeft: '17px', width: '50vh', marginLeft: "0", paddingRight: 'none', height: '50vh'}}>
           
            <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px', marginLeft: '110px', marginBottom: '60px', marginTop: '30px' }} >
                <img src={blnr} alt="" height={20}  />  
            </Link>
        
            <div className='inputMain' style={{ background: 'white', color: '#111111', borderRadius: '25px', paddingTop:'40px', paddingBottom:'190px', paddingLeft:'5vh', paddingRight: '1vh', width: '200px', marginBottom: '50px'}}>
                <form action="/url" method="GET">
                    <p>Input your BLNR Code</p>
                    <input type="text" style={{ height: '40px', width: '150px', background: '#D9D9D9', borderRadius: '10px' }} />
                    
                </form>
                <button className='button' >
                    <Link to= "./Welcome" style = {{ background: '#FF9C00' ,textDecoration: 'none', color: 'white', width: '100px', padding: '10px', marginLeft: '10px'}}>Login</Link>
                </button>
            </div >
            <div style={{textAlign: '',  color: 'white', marginLeft: '70px', marginRight: '20px', paddingBotton: '0px'}}>
             <p>(c) BLNR 2023</p>
        </div>

       

        </div>

        </div>
        
    )
  }
  
  export default Main