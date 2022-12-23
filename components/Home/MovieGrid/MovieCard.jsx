import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function MovieCard({item}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

function releaseDate(date) {
    let data = date.split("-")
    let month 
    if(data[1] === "01"){
        month = "Jan"
    }else if(data[1] === "02"){
        month = "Feb"
    }else if(data[1] === "03"){
        month = "Mar"
    }else if(data[1] === "04"){
        month = "Apr"
    }else if(data[1] === "05"){
        month = "May"
    }else if(data[1] === "06"){
        month = "Jun"
    }else if(data[1] === "07"){
        month = "Jul"
    }else if(data[1] === "08"){
        month = "Aug"
    }else if(data[1] === "09"){
        month = "Sep"
    }else if(data[1] === "10"){
        month = "Oct"
    }else if(data[1] === "11"){
        month = "Nov"
    }else if(data[1] === "12"){
        month = "Dec"
    }
    return `${month} ${data[2]}, ${data[0]}`
}

  return (
    <Card sx={{ maxWidth: "350px",  width: "300px", margin: "30px 40px"}}>
      <CardMedia
        sx={{borderRadius:"5px"}}
        component="img"
        height="450px"
        image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
        alt={item.original_title}
      />
      <CardContent>
        <Typography variant="h7" color="black" fontWeight="600">
          {item.original_title}
        </Typography>
        <br/>
        <Typography variant="h7" color="text.secondary" >
          {releaseDate(item.release_date)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> 
    </Card>
  );
}

export default MovieCard;