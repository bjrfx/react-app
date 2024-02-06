import { Component } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from "@mui/material";

class Carddata extends Component {
    constructor() {
        super();
        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => this.setState({ monsters: users }));
    }

    render() {
        return (
            <Container maxWidth="lg" sx={{ marginTop: 2 }}>
                <Grid container spacing={3}>
                    {this.state.monsters.map((monster, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <BasicCard monster={monster} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

function BasicCard({ monster }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Company: {monster.company.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {monster.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    username: {monster.username}
                </Typography>
                <Typography variant="body2">
                    {monster.company.catchPhrase}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Carddata;
