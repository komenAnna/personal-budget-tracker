import React from 'react'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <div className='logo'><h1>Wealth Wise</h1></div>

        {/* menu */}
        <div className='sidebar-menu'>
            {SidebarData.map(item =>(
                <li key={item.id} className='sidebar-item'>
                    <span>{item.icon}</span>
                    <span><a href={item.link}>{item.title}</a></span>
                </li>
            ))}
        </div>
    </aside>
  )
}

export default Sidebar