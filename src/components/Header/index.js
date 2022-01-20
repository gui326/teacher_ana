import { HeaderArea, NavBar, LogoArea, MenuArea, Menu, MenuMobile } from "./styled";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){
    return(
        <HeaderArea>
            <NavBar>
                <LogoArea>
                    <Link to="/">
                        <img width="55" src="logo.png"/>
                    </Link>
                </LogoArea>
                <MenuArea>
                    <Menu>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Login</li>
                    </Menu>

                    <MenuMobile>
                        <MenuIcon/>
                    </MenuMobile>
                </MenuArea>
            </NavBar>

        </HeaderArea>
    );
}