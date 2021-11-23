import React from 'react';
import {Link} from "react-router-dom";
import Nav from "./Nav";
import Folder from '../../assets/img/icons8-mac-folder-96.png'
import styled from 'styled-components'

const Img = styled.img`
  width: 25px;
  padding-right: .3rem;
`

const Header = ({title}) => {
    return (
        <div className="header">
            <div className="dots">
                <div className="dot"/>
                <div className="dot"/>
                <div className="dot"/>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <Img src={Folder} alt="Folder"/>{" "}
                <Link to={`/`}> Text Analytics - {title}</Link>
            </div>
        </div>
    );
};

export default Header;
