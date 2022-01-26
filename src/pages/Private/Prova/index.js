import { Main, Header, Content, CardPrincipais, CardTopo, FooterArea, NavBar, NavBarLogo, NavBarTitle } from "./styled";
import { Button, Grid } from "@mui/material";

export default function VerProva(){
    return(
        <Main>
            <Header>
                <NavBar>
                    <NavBarLogo>
                        <img src="/logo.png"/>
                    </NavBarLogo>
                    <NavBarTitle>
                        <p>curso</p>
                        <h1>Matemática</h1>
                    </NavBarTitle>
                </NavBar>
            </Header>

            <Content>
                <Grid mt={1} container spacing={2}>
                    <Grid item md={3}>
                        <CardTopo>
                            <h1>Prova de matemática básica</h1>
                        </CardTopo>
                    </Grid>
                    <Grid item md={7}>
                        <CardTopo>
                            
                        </CardTopo>
                    </Grid>
                    <Grid item md={2}>
                        <CardTopo>
                            <p>00:30:00</p>
                        </CardTopo>
                    </Grid>
                </Grid>

                <CardPrincipais>
                    <FooterArea>
                        <Button variant="contained">
                            Próxima
                        </Button>
                    </FooterArea>
                </CardPrincipais>
            </Content>
        </Main>
    );
}