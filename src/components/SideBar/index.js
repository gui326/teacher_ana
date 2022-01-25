import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

import { SideBarArea, MenuArea, Menu } from "./styled";

export default function SideBar(props){
    return(
        <SideBarArea expansible={props.expansible}>
            <MenuArea>
                <Link to="/dashboard">
                    <Menu expansible={props.expansible}>
                        <HomeIcon />
                        <p>Home</p>
                    </Menu>
                </Link>
                <Link to="/cursos">
                    <Menu expansible={props.expansible}>
                        <SchoolIcon />
                        <p>Cursos</p>
                    </Menu>
                </Link>
            </MenuArea>
        </SideBarArea>
    );
}