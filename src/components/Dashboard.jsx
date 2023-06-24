import { Link } from 'react-router-dom';
import blnr from './blnr.png'
const Dashboard = () => {

   
    return (
      <div className='dashboard'>
      <div style={{ padding: '5px',  color: 'white', lineHeight: '2px'}}>
            <div >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px', marginLeft: '110px', marginBottom: '60px' }} >
                <img src={blnr} alt="" height={20}  />  
            </Link>
        </div>
        
            <div style={{ background: 'orange', color: '#111111', borderRadius: '25px', paddingTop:'15px', paddingBottom:'20px', paddingLeft:'2vh', paddingRight: '2vh', width: '230px'}}>
                <div style={{display:'flex'}}> 
                  <div style={{ borderRadius: '50%', background: '#D9D9D9', width: '80px', height: '80px', marginTop: '20px', marginRight: '8px'}}>
                      <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px', marginLeft: '110px', marginBottom: '60px' }} >
                        <img src={blnr} alt="" height={0}  />  
                      </Link></div>
                  <div>
                    <h3>Your Name</h3>
                    <h5>blnr.me/eric</h5>
                    <div style={{background:'white', color: '#111111', paddingTop: '0.5px', paddingBottom: '0.5px' ,padding: '0.5px', width: '50px', height: '40px' , paddingRight: '8px', paddingLeft: '18px', borderRadius: '10px'}}><p>Share</p></div>
                  </div>
                </div>
            </div>
            <h3 style={{color: 'white', marginLeft: '70px', marginRight: '20px', paddingBotton: '0px'}}>Edit Dashboard</h3>
            
            <div style={{textAlign: '',  color: 'white', marginLeft: '85px', marginRight: '20px', paddingBotton: '0px', paddingTop: '260px'}}>
               <p>(c) BLNR 2023</p>
            </div>
        </div>
      </div>
 
    )
  }
  
  export default Dashboard