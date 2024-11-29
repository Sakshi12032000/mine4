import React from 'react'
import dabalash from '../../assets/dabalash_logo.webp';
// import facebook from '../../assets/facebook.png';
// import youtube from '../../assets/youtube.png';

function Header() {
  return (
    <div>
       <div className='container'>
           <div className='header-container'>
            <div className='social-icon'>
                {/* <li> <img src={facebook} alt=''/> </li>
                <li> <img src={youtube} alt=''/> </li>
                <li> <img src={insta} alt=''/> </li>
                <li> <img src={tiktok} alt=''/> </li> */}
            </div>
              <img src={dabalash} alt='' />
           </div>
       </div>
    </div>
  )
}

export default Header


