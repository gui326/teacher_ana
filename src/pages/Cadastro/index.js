import { Section, ContentArea, Card, Loading } from "./styled";
import { Button, Grid, TextField } from "@mui/material";
import db from "../../firebaseConnection";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Cadastro(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCpf] = useState();
    const [nascimento, setNascimento] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    async function newUser(){
        const auth = getAuth();
        setLoading(true);

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            await setDoc(doc(db, "users", userCredential.uid), {
                nome,
                sobrenome,
                cpf,
                nascimento,
            });

            console.log(userCredential);
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            setLoading(false);
            setErrorMessage(error.message);
            // ..
        });
    }


    return(
        <Section>
            <ContentArea>
                <Card>
                    <h1>Cadastrar</h1>
                    {!loading ? 
                        <>
                            <Grid pt={3} container spacing={4}>
                                <Grid item md={6}>
                                    <TextField fullWidth label="Nome" onInput={event => setNome(event.target.value)} variant="outlined" />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField fullWidth label="Sobrenome" onInput={event => setSobrenome(event.target.value)} variant="outlined" />
                                </Grid>
                            </Grid>

                            <Grid pt={3} container spacing={4}>
                                <Grid item md={4}>
                                    <TextField fullWidth label="CPF" variant="outlined" onInput={event => setCpf(event.target.value)} />
                                </Grid>
                                <Grid item md={3}>
                                    <TextField fullWidth InputLabelProps={{ shrink: true }} onInput={event => setNascimento(event.target.value)} type="date" label="Data de Nascimento" variant="outlined" />
                                </Grid>
                            </Grid>

                            <Grid pt={3} container spacing={4}>
                                <Grid item md={7}>
                                    <TextField fullWidth type="email" label="E-mail" onInput={event => setEmail(event.target.value)} variant="outlined" />
                                </Grid>
                                <Grid item md={5}>
                                    <TextField fullWidth type="password" label="Senha" onInput={event => setPassword(event.target.value)} variant="outlined" />
                                </Grid>
                            </Grid>

                            <Grid pt={3} container spacing={4}>
                                <Grid item md={4}>
                                    <Button fullWidth onClick={() =>  newUser() } variant="outlined">
                                        Cadastrar
                                    </Button>
                                </Grid>
                                <Grid item md={8}>
                                    <p>{errorMessage}</p>
                                </Grid>
                            </Grid>
                        </>
                    : 
                        <Loading>
                            <RefreshIcon />
                        </Loading>
                    }
                </Card>
            </ContentArea>
        </Section>
    );
}