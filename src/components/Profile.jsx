
const Profile = () => {

   
    return (
        <div style={{ padding: '80px',  color: 'white'}}>
        <div >
            
        </div>
    
        <div style={{ paddingTop:'40px', paddingBottom:'200px', paddingLeft:'3vh', paddingRight: '3vh'}}>
            <h3>Create your profile</h3>
            <form action="/url" method="GET">
                <input type="file" style={{ height: '40px', width: '150px', background: '#D9D9D9'
, borderRadius: '10px' }} placeholder="Upload your image (image size not exceed 5MB)" />
            </form>
            <form action="/url" method="GET">
                <p>Display name</p>
                <input type="text" style={{ height: '40px', width: '150px', background: '#D9D9D9'
, borderRadius: '10px' }} />
            </form>
            <form action="/url" method="GET">
                <p>Bio</p>
                <input type="text" style={{ height: '40px', width: '150px', background: '#D9D9D9'
, borderRadius: '10px' }} placeholder="Tell the world how elite you are" />
            </form>
            <form action="/url" method="GET">
                <p>Social Media Link</p>
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
  
  export default Profile