import React, { useEffect, useState } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'
import IconButton from '@material-ui/core/IconButton'



function Post({ nombre, textoPublicacion, imagenAvatar, urlimagen}) {
  const classes = useStyles();

  return(
    <div className={classes.post}>
    <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar alt="Antonio" src={imagenAvatar}></Avatar>}
            title={nombre}
            subheader={new Date().toDateString()}
            action={
            <IconButton>
              <MoreVertIcon/>
             
              
            </IconButton>}
          ></CardHeader>
          <CardMedia className={classes.media} image={urlimagen} />
          <CardActions disableSpacing>
				<IconButton>
					<FavoriteIcon />
				</IconButton>
				<IconButton>
					<CommentIcon />
				</IconButton>
				<IconButton>
					<ShareIcon />
				</IconButton>
			</CardActions>

			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
          {textoPublicacion}
				</Typography>
			</CardContent>

        </Card>
    </div>
  )   
}
const useStyles = makeStyles((theme) => ({
 
  media:{
    height:0,
    paddingTop: "100%",
    
  },
  card:{
    marginLeft:0,
    width:"200%"

  },
  post:{
    marginTop:50
  }
  
}));

export default Post;
