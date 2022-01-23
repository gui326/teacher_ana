import { Button, Grid, TextField } from "@mui/material";
import { Section, Card, ContentArea } from "./styled";

export default function Login(){
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
                    
                    <p>Recuperar Senha</p>

                        
                </Card>
            </ContentArea>
        </Section>
    );
}