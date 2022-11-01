import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.png'
import main from './main.png'
/* import pic1 from './pic1.png' */
/* import star from './star.png' */
/* import wed from './wedding.png' */
import data from './data'
import blog from './blogdata'
import trollLogo from './trollLogo.png'
import memesData from './memeData';

function Nav() {
  return(

    <div className="nav">
      <img src={logo} alt="logo" width="" />
      <div className='navRight'>
        <a href='www.google.com'>About</a>
        <a href='www.google.com'>Products</a>
        <a href='www.google.com'>Contact Us</a>
      </div>
      </div>
  )
}

function Main() {
  return(
    <div className="main">
      <img src={main} alt="main" width="" />
      </div>
  )
}

function Text() {
  return(
    <div className="text">
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by<br/> one-of-a-kind hosts—all without leaving<br/> home.
      </p>
      
      </div>
  )
}




function Posts(props) {

  let badgeText 
    if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
      badgeText = "ONLINE"
    }

  return (
    <div className='posts'>
      
      {badgeText && <div className='badge'>{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} alt="" />
          <div className="postnote">
              <img src="../images/star.png" alt="" />
              <span className='left'>{props.stats.rating}</span>
              <span >({props.stats.reviewCount}) • </span>
              <span >{props.location}</span>
          
         <div className='title'> <p><b>{props.title}</b></p>
            </div>
          <p><span ><b>From ${props.price}</b></span> / person</p>
          </div>
        </div>
     


      

  )
}
function Blognav() {
  
  return (
    <div className='bbg'>
    <div className='blognav'>
        <img src={'../images/world.png'} alt='' />
        <h4>My Travel Journal</h4>
      </div>
      </div>
  )
}


function Blog(props) {

 
  return (
    <div className='blog'>

      

      
      <div className='story'>
        <div className='leftimg'>
        <img src={`../images/${props.image}`} alt="" />
        </div>
        
        <div className='note'>
          <div className='location'>
            <img src={'../images/location.png'} alt='' />
            <h4> {props.location} <a  href={'{props.googleMapsUrl}'} className='place'> View on Google Maps</a> </h4>
          </div>

        <div className='content'>
          <h1>{props.title}</h1>
          <h4>{props.startDate} - {props.endDate}</h4>
          <h5>{props.description}</h5>
        </div>

        </div>
      </div>
      <hr/>
    </div>
  )
}





  function TrollNav() {
    return(
      <div className='trollNav'>
        
        <div className='trologo'>
          <img src={trollLogo} alt="logo" width="" />
          <h3>Meme Generator</h3>
        </div>

        <div className='navLeft'>
          <h5>React Course - Project 3</h5>
        </div>

      </div>
    )
  }


  function Meme() {
    const [memeImg, setMemeImg] = React.useState("")
    function getMemeImg() {
      const memesArray = memesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      setMemeImg(memesArray[randomNumber].url)
      
    }

    return(
      <main>
        <div className='memeForm'>
          
          <input 
            type="text"
            placeholder='Top Text'
            className='form-input'
          />  
          <input
            type='text'
            placeholder='Bottom Text'
            className='form-input'
          />
          <button 
            onClick={getMemeImg}
            className='form-button'
          >
            Get a new Meme Image
          </button>    
          <div className='resultImg'>
            <img src={memeImg} alt=''  />
          </div>
        </div>
      </main>  
    )
  }


  function GoingOut() {

    const [ isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind() {
      setIsGoingOut(preState => !preState )
    }

      return (
        <div className='state'>
          <div className='state-'>
          <h1 className='state-title' >Do you want to go out?</h1> 
          <h4>(Click Me!)</h4>
          <div onClick={changeMind} className='state-value'>
            <h1>{isGoingOut ? "Yes":"No"} </h1>
          </div>
          </div>
        </div>
      )
  }


          






  function Post() {
  // <Hero />
    const cards = data.map(items => {
    return (
      <Posts 
          key={items.id}
          {...items}
    />
    )
    }) 
    const vacationBlog = blog.map(items => {
      return (
        <Blog
            key={items.id}
            {...items}
        />
      )
    } )
    
    
    return (
      <div class="center">
        <Nav/>
        <Main/>
        <Text/>
        <div className='poost'>
        
        {cards}
    
        </div>
        <Blognav/>
        {vacationBlog}
        <TrollNav/>
        <Meme/>
        <GoingOut/>
        
      </div>

     
    
    )
  }



/* function Mypage() {
return (
  <div class="center">
    <Nav/>
    <Main/>
    <Text/>
    <div className='posts'>
    
    <Post/>

    </div>
     
 
  </div>

)
} */

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Post/>) 