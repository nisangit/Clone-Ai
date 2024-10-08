import React from 'react'
import { assets } from '../../assets/assets';
import './Header.css';

function Header() {
    return (
       <header className='header'><img src={assets.gemini_icon}></img><strong>Clone AI</strong></header> 
    )
}

export default Header
