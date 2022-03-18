import { FavoriteBorder, Star } from '@mui/icons-material'
import React from 'react'
import './SearchResult.css'


const SearchResult = ({img, location, title, description, star, price, total}) => {
  return (
    <div className='searchResult'>
        <img src={img} alt=''></img>
        <FavoriteBorder className='searchResult_heart'/>
        <div className='searchResult_info'>
            <div className='searchResult_infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{description}</p>
            </div>
            <div className='searchResult_infoBottom'>
                <div className='searchResultStars'>
                    <Star className='searchResult_star'></Star>
                    <p><strong>{star}</strong></p>
                </div>
                <div className='searchResult_price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SearchResult
