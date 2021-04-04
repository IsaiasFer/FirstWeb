import React from 'react';
import ReactDOM from 'react-dom';

import './styles/diseño.css';

import Headersito from './components/header'
import Hero from './components/hero'
import Article1 from './components/article1'
import Exp from './components/exp'
import Contact from './components/contact'
import Footer from './components/footer'
import BurguerIcon from './components/burguerIcon'

const HeaderContainer=document.getElementById('HeaderContainer');
const HeroContainer=document.getElementById('hero');
const portfolioContainer=document.getElementById('Portafolio');
const expContainer=document.getElementById('Experiencia');
const footerContainer=document.getElementById('footer');
const contactContainer=document.getElementById('WeWork');
const iconContainer=document.getElementById('iconContainer');

ReactDOM.render(<Headersito />,HeaderContainer)
ReactDOM.render(<Hero />,HeroContainer)
ReactDOM.render(<Article1 />,portfolioContainer)
ReactDOM.render(<Exp />,expContainer)
ReactDOM.render(<Contact />,contactContainer)
ReactDOM.render(<Footer />,footerContainer)
ReactDOM.render(<BurguerIcon />,iconContainer)
