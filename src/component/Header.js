import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import { useState } from 'react';

const Header = ()=>{
    const [active, setActive] = useState('item1');

    const onSetActiveMenu = (item)=>{
        if(active !== item){
            setActive(item);
        }
    }
    
    return(
        <header id="top-navbar">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="#"><img src={Logo} alt="logo" height="40" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'item1' ? 'active' : ''} `} onClick={()=> onSetActiveMenu('item1')} href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'item2' ? 'active' : ''} `} onClick={()=> onSetActiveMenu('item2')}  href="#">Location</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'item3' ? 'active' : ''} `} onClick={()=> onSetActiveMenu('item3')} href="#">Amenities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'item4' ? 'active' : ''} `} onClick={()=> onSetActiveMenu('item4')} href="#">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'item5' ? 'active' : ''} `} onClick={()=> onSetActiveMenu('item5')} href="#">Floor Plan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === 'item6' ? 'active' : ''} `} onClick={()=> onSetActiveMenu('item6')} href="#">Overview</Link>
                            </li>
                            <button className='px-4 py-1 rounded-pill nav-btn text-uppercase'>Let's Talk</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
} 
export default Header;