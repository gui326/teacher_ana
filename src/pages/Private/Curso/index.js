import { Button, Grid } from "@mui/material";
import { Content, CardPrincipais, Heading, Card, HeadTitle, HeadingTitle } from "./styled";
import AssignmentIcon from '@mui/icons-material/Assignment';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function Curso(){
    return(
        <Content>
            <p>curso</p>
            <h1>Matemática</h1>

            <CardPrincipais>
                <Heading>
                    <HeadingTitle>
                        <AssignmentIcon/>
                        <h1>Provas</h1>
                    </HeadingTitle>

                    <Button variant="contained">
                        Ver Mais
                    </Button>
                </Heading>

                <Grid mt={2} container spacing={2}>
                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>
                </Grid>
            </CardPrincipais>

            <CardPrincipais>
                <Heading>
                    <HeadingTitle>
                        <OndemandVideoIcon/>
                        <h1>Vídeos</h1>
                    </HeadingTitle>

                    <Button variant="contained">
                        Ver Mais
                    </Button>
                </Heading>

                <Grid mt={2} container spacing={2}>
                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Aula 2</h6>
                            </HeadTitle>
                            <p>
                                Aula sobre o ensinamentos de divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>
                </Grid>
            </CardPrincipais>

            <CardPrincipais>
                <Heading>
                    <HeadingTitle>
                        <TextSnippetIcon/>
                        <h1>Artigos</h1>
                    </HeadingTitle>

                    <Button variant="contained">
                        Ver Mais
                    </Button>
                </Heading>

                <Grid mt={2} container spacing={2}>
                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Artigo</h6>
                            </HeadTitle>
                            <p>
                                Fazendo divisões
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>

                    <Grid item md={3} xs={6}>
                        <Card>
                            <HeadTitle>
                                <h6>Matemática Básica</h6>
                            </HeadTitle>
                            <p>
                                Prova de matemática básica, contendo contas de multiplicação e divisão.
                            </p>
                        </Card>
                    </Grid>
                </Grid>
            </CardPrincipais>
        </Content>
    );
}