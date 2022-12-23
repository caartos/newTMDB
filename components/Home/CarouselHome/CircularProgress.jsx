import React from 'react'
import PropTypes from "prop-types";
import { CircularProgress, Typography, Box } from '@mui/material'; 


const ItemCircularProgress = ({value}) => {
    let number = value *10
    
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={number} size="4rem" />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          fontStyle="normal"
          sx={{fontVariant: "normal" ,  textTransform: "none" , lineHeight: "1"}}
          component="span"
          fontSize="1em"
          color="#fff"
        >{`${Math.round(number)}%`}</Typography>
      </Box>
    </Box>
  )
}

ItemCircularProgress.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired
  };

export default ItemCircularProgress