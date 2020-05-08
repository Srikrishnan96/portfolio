import React from 'react';
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button }    from '@material-ui/core';

const useExperienceCardStyles = makeStyles({
    root: {
      width: '50%',
      minWidth: 345,
      marginBottom: 20,
    },
  });

const ExperienceCard = (props) => {
    const { company, jobTitle } = props;
    const classes = useExperienceCardStyles();
    return <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {company}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {jobTitle}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
}

export default ExperienceCard;