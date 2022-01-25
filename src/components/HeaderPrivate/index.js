import { useState } from 'react';
import { NavBar, HeaderArea, LogoArea, ContentArea } from "./styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function HeaderPrivate(props){
    return(
        <HeaderArea>
            <NavBar>
                <LogoArea>  
                    <MenuIcon onClick={() => props.handleExpansible('')}/>
                    <Link to="/dashboard">
                        <img src="logo.png"/>
                    </Link>
                </LogoArea>
                <ContentArea>
                    <Link to="/dashboard">
                        <AccountCircleIcon/>
                    </Link>
                </ContentArea>
            </NavBar>
        </HeaderArea>
    );
}