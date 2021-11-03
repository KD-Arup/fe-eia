import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/burger-menu.css'

export const BurgerMenu = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    function handleClick() {
        //
    }

    const SidebarData = [
        {
          title: 'Projects',
          path: '/',
          icon: "",
          cName: 'nav-text'
        },
        {
            title: 'item-2',
            path: '/',
            icon: "...",
            cName: 'nav-text'
        },
        {
            title: 'item-1',
            path: '/',
            icon: "...",
            cName: 'nav-text'
        }
      ];
    
    return (
        <>
            <div className='burger_button_container'>
            <Link to='#' className='menu-bars'>
                <button className="burger_button" onClick={showSidebar}>=</button>
            </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <button className="close_burger_menu_button" >X</button>
                </Link>
                </li>
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} 
                    className={item.cName} 
                    onClick={(e)=>{handleClick(item.title)}}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
        </>
    )
}