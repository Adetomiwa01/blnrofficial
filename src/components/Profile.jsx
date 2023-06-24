import { Link } from 'react-router-dom';
import blnr from './blnr.png'
const Profile = () => {

   
    return (
        <div className='profile'>
        <div style={{ padding: '5px',  color: 'white', lineHeight: '13px'}}>
            <div >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '20px', marginLeft: '110px', marginBottom: '60px' }} >
                <img src={blnr} alt="" height={20}  />  
            </Link>
        </div>
        
            <div style={{ paddingTop:'0px', paddingBottom:'20px', paddingLeft:'3vh', paddingRight: '3vh'}}>
                <h2>Create your profile</h2>
                <form action="/url" method="GET">
                    <p style={{width: '200px', fontSize: '12.5px'}}>Upload your image (image size should not exceed 5MB)</p>
                    <input type="file" style={{ height: '30px', width: '150px',  padding: '10px' }} placeholder="" />
                </form>
                <form action="/url" method="GET">
                    <p>Display name</p>
                    <input type="text" style={{ height: '30px', width: '150px', background: '#D9D9D9', borderRadius: '10px' }} />
                </form>
                <form action="/url" method="GET">
                    <p>Bio</p>
                    <input type="text" style={{ height: '30px', width: '200px', background: '#D9D9D9', borderRadius: '10px' }} placeholder="Tell the world how elite you are"  />
                </form>
                <form action="/url" method="GET">
                    <p>Social Media Link</p>
                    <input type="text" style={{ height: '30px', width: '150px', background: '#D9D9D9', borderRadius: '10px' }} />
                </form>

                <button style={{background: 'white',fontWeight: 'bold', color: '#111111', height: '40px', padding: '2px', marginLeft: '-4px'}}><Link to= "./username" style = {{ background: '' ,textDecoration: 'none', color: '#181818', width: '100px', padding: '10px', marginLeft: '10px'}}>Save</Link></button>
            </div>

            <div style={{textAlign: '',  color: 'white', marginLeft: '90px', marginRight: '20px', paddingBotton: '0px'}}>
             <p>(c) BLNR 2023</p>
        </div>
    </div>
    </div>
    )
  }
  
  export default Profile