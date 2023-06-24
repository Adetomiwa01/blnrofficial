import { Link } from 'react-router-dom';
import blnr from './blnr.png'

const Welcome = () => {

   
    return (
        <div className='welcomePage'>
        <div className='welcome' style={{ color: 'white,', paddingLeft: '17px', width: '50vh', marginLeft: "0", paddingRight: 'none', height: '50vh'}}>
            <div >
                <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px', marginLeft: '100px', marginBottom: '60px', marginTop: '30px' }} >
                    <img src={blnr} alt="" height={20}  />  
                </Link>
            </div>
        
            <div style={{ paddingTop:'20px', paddingBottom:'110px', paddingLeft:'0.5vh', paddingRight: '3vh', width: '250px', color: 'white'}}>
            <h1>Hey Eric</h1>
            <p>Congratulations on your card purchases now choose where to link it to</p>
            <button style={{ width: '100%', marginLeft: '-5px'}}><Link to= "./profile" style = {{ background: '#FF9C00' ,textDecoration: 'none', color: 'white', width: '100px', padding: '10px', marginLeft: '10px'}}>Create a billionaire page+</Link></button>
            <button style={{ background: 'none', border: 'none', marginLeft: '-45px'}}>other options+ </button>
            </div>

            <div style={{textAlign: '',  color: 'white', marginLeft: '70px', marginRight: '20px', paddingBotton: '0px'}}>
                <p>(c) BLNR 2023</p>
            </div>
    </div>
    </div>
    )
  }
  
  export default Welcome