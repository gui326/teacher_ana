import { Section, ContentArea, Card } from "./styled";
import { Button, Grid, TextField } from "@mui/material";
import firebase from "../../firebaseConnection";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Cadastro(){
    const auth = getAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function newUser(){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }


    return(
        <Section>
            <ContentArea>
                <Card>
                    <h1>Cadastrar</h1>

                    <Grid pt={3} container spacing={4}>
                        <Grid item md={6}>
                            <TextField fullWidth label="Nome" variant="outlined" />
                        </Grid>
                        <Grid item md={6}>
                            <TextField fullWidth label="Sobrenome" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid pt={3} container spacing={4}>
                        <Grid item md={4}>
                            <TextField fullWidth label="CPF" variant="outlined" />
                        </Grid>
                        <Grid item md={3}>
                            <TextField fullWidth InputLabelProps={{ shrink: true }} type="date" label="Data de Nascimento" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid pt={3} container spacing={4}>
                        <Grid item md={7}>
                            <TextField fullWidth type="email" label="E-mail" variant="outlined" />
                        </Grid>
                        <Grid item md={5}>
                            <TextField fullWidth type="password" label="Senha" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid pt={3} container spacing={4}>
                        <Grid item md={4}>
                            <Button fullWidth variant="outlined">
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </ContentArea>
        </Section>
    );
}