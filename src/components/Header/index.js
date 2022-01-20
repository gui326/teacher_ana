import { HeaderArea, NavBar, LogoArea, MenuArea, Menu } from "./styled";
import { Link } from "react-router-dom";

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
                </MenuArea>
            </NavBar>
        </HeaderArea>
    );
}