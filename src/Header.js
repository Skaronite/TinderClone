import React from 'react'
import  './Header.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return (
    <div className ='head'>
      <IconButton>
      <AccountCircleIcon fontSize='large' className='header_icon'/>
      </IconButton>
      <img
        className='header__logo'
        src= 'https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Logo.wine.svg'
        alt ="Tinder"
      />
      <IconButton>
     <ForumIcon fontSize='large' className='header_icon'/>
    </IconButton>

    </div>
   

  )
}

export default Header
