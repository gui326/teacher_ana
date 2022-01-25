import { Content } from './styled';

export default function Container(props){
    return(
        <Content expansible={props.expansible}>
            {props.children}
        </Content>
    );
}