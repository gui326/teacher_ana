import { Content, CardPrincipais, Heading, HeadingTitle, Info, Text, FooterArea } from "./styled";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button, Grid } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Link } from "react-router-dom";

export default function VerProva(){
    return(
        <Content>
            <p>curso</p>
            <h1>Matemática</h1>

            <CardPrincipais>
                <Heading>
                    <HeadingTitle>
                        <AssignmentIcon/>
                        <h1>Prova</h1>
                    </HeadingTitle>

                    <h3>matemática básica</h3>
                </Heading>

                <hr/>

                <Grid pt={4} container spacing={4}>
                    <Grid item md={9}>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                    </Grid>
                    <Grid item md={3}>
                        <Info>
                            <AccessTimeFilledIcon/>
                            <p>30 min para realizar</p>
                        </Info>
                        <Info>
                            <AccessTimeFilledIcon/>
                            <p>30 questões</p>
                        </Info>
                    </Grid>
                </Grid>
                
                <FooterArea>
                    <Link to="/curso/matematica/realizarprova?prova=12932">
                        <Button variant="contained">
                            Começar Prova
                        </Button>
                    </Link>
                </FooterArea>
            </CardPrincipais>
        </Content>
    );
}