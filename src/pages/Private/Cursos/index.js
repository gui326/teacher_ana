import { Grid, Skeleton } from "@mui/material";
import { useState } from "react";
import { Card } from './styled';
import { Link } from "react-router-dom";

export default function Cursos(){
    const [loading, setLoading] = useState(false);

    return(
        <div>
            <h1>Meus Cursos</h1>

            <Grid pt={2} container spacing={4}>
                <Grid item md={3} xs={6}>
                    {loading ?
                        <Skeleton animation="wave" sx={{ borderRadius: '7px' }} variant="rectangular" height={150} />
                    : 
                        <Link to="/curso/matematica">
                            <Card>
                                <p>Professor Anderson</p>
                                <h5>Matemática</h5>
                            </Card>
                        </Link>
                    }
                </Grid>
                <Grid item md={3} xs={6}>
                    <Skeleton animation="wave" sx={{ borderRadius: '7px' }} variant="rectangular" height={150} />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Skeleton animation="wave" sx={{ borderRadius: '7px' }} variant="rectangular" height={150} />
                </Grid>
                <Grid item md={3} xs={6}>
                    <Skeleton animation="wave" sx={{ borderRadius: '7px' }} variant="rectangular" height={150} />
                </Grid>
            </Grid>
        </div>
    );
}