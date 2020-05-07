import React from 'react';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import ExperienceCard from './experience-card';

const InfoPaper = (props) => {
    const { paperTitle, backgroundColor } = props;
    return <Paper
    square
    style={{
        width: '100%',
        margin: 'auto',
        backgroundColor: backgroundColor,
    }}
    variant="outlined"
    elevation={3}
    >
        <Box
        component="div"
        style={{
            marginTop: 15,
            marginBottom: 20,
            marginLeft: 15,
            color: (backgroundColor.includes('255') ? 'black' : 'white'),
        }}
        >
            <Typography variant="h3">{paperTitle}</Typography>
        </Box>
        <Grid container justify="center" alignContent="center" direction="column">
            <ExperienceCard company={"National Grid"} jobTitle={"Data Management Intern"}/>
            <ExperienceCard company={"Cognizant"} jobTitle={"Program Analyst"}/>
            <ExperienceCard company={"Cognizant"} jobTitle={"Program Analyst"}/>
        </Grid>
    </Paper>
}

export default InfoPaper;