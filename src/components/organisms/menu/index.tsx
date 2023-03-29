/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react';
import { FaHome, FaMoneyCheckAlt } from 'react-icons/fa';
import './index.css';

const Menu= ()=>{
    const [activeTab, setActiveTab] = useState("home");
    return(
        <div className="navigation">
        <ul>
            <li className={`list ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab('home')}>
            <a href="#">
                <span className="icon">
                <FaHome />
                </span>
                <span className="text">Home</span>
            </a>
            </li>
            <li className={`list ${activeTab === "rendimento" ? "active" : ""}`} onClick={() => setActiveTab('rendimento')}>
            <a href="#">
                <span className="icon">
                <FaMoneyCheckAlt />
                </span>
                <span className="text">Informe</span>
            </a>
            </li>
                    <li className={`list ${activeTab === "telab" ? "active" : ""}`} onClick={() => setActiveTab('telab')}>
            <a href="#">
                <span className="icon">
                <FaHome />
                </span>
                <span className="text">tela b</span>
            </a>
            </li>
                    <li className={`list ${activeTab === "telac" ? "active" : ""}`} onClick={() => setActiveTab('telac')}>
            <a href="#">
                <span className="icon">
                <FaHome />
                </span>
                <span className="text">tela c</span>
            </a>
            </li>
            <li className={`list ${activeTab === "telae" ? "active" : ""}`} onClick={() => setActiveTab('telae')}>
            <a href="#">
                <span className="icon">
                <FaHome />
                </span>
                <span className="text">tela e</span>
            </a>
            </li>
            <div className="indicator"></div>
        </ul>
        </div>
    )
}

export default Menu