import './sidebar.css';
import {SidebarData} from './SidebarData';
import React from 'react';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
            {SidebarData.map((val,key) => {
                return(
                    <li className="row" key={key} onClick={()=>{window.location.pathname = val.link}} id={window.location.pathname === val.link ? "active" : null}>
                        {" "}
                        <div id="icon">{val.icon}</div>{" "}
                        <div id="title">
                            {val.title}
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar;