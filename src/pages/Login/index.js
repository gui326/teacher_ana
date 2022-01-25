import { Button, Grid, TextField } from "@mui/material";
import { Section, Card, ContentArea, SideCard, CardApi, LinkArea } from "./styled";
import { Link } from "react-router-dom";
import firebase from "../../firebaseConnection";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login(){
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    async function handlerLoginGoogle(){
        await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }


    return(
        <Section>
            <ContentArea>
                <Card>
                    <h1>Acessar Conta</h1>
                    
                    <Grid> 
                        <Grid item mt={4} ms={12}>
                            <TextField fullWidth label="E-mail" variant="outlined"/>
                        </Grid>
                        <Grid item mt={4} ms={12}>
                            <TextField fullWidth type="password" label="Senha" variant="outlined"/>    
                        </Grid>
                        <Grid item mt={4} ms={12}>
                            <Button sx={{ height: '50px' }} fullWidth variant="outlined">Acessar</Button>
                        </Grid>
                    </Grid>
                    
                    <LinkArea>
                        <Link to="/cadastrar">
                            <p>Criar conta</p>
                        </Link>
                        <p>Recuperar Senha</p>
                    </LinkArea>
                        
                </Card>

                <SideCard>
                    <CardApi onClick={() => handlerLoginGoogle()}>
                        <h1>Google</h1>
                    </CardApi>

                    <CardApi>
                        <h1>Facebook</h1>
                    </CardApi>
                </SideCard>
            </ContentArea>
        </Section>
    );
}