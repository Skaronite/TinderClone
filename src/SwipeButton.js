import React from 'react'
import './SwipeButton.css'

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButton() {
  return (
    <div className= "swipeButtons">

      <IconButton>
      <ReplayIcon fontSize='large' className='swipeButton__repeat'>
      </ReplayIcon>
      </IconButton>
      <IconButton>
      <CloseIcon fontSize='large' className='swipeButton__left'/>
      </IconButton>
      <IconButton>
      <StarRateIcon fontSize='large' className='swipeButton__star'/>
      </IconButton>
      <IconButton>
      <FavoriteIcon fontSize='large' className='swipeButton__right'/>
      </IconButton>
      <IconButton>
      <FlashOnIcon fontSize='large' className='swipeButton__thunder'/>
      </IconButton>
    </div>
  )
}

export default SwipeButton
