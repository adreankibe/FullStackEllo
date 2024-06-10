import React from 'react';
import { Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookThumbnail from './BookThumbnail';

const ReadingList = ({ readingList, removeFromReadingList }) => {
  const [anchorEl, setAnchorEl] = React.useState(Array(readingList.length).fill(null));

  const handleClick = (event, index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  const handleClose = (index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = null;
    setAnchorEl(newAnchorEl);
  };

  return (
    <Grid container spacing={2}>
      {readingList.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <BookThumbnail book={book} />
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={(event) => handleClick(event, index)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl[index]}
            keepMounted
            open={Boolean(anchorEl[index])}
            onClose={() => handleClose(index)}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={(event) => {
              event.stopPropagation();
              removeFromReadingList(book);
            }}>
              Remove from Reading List
            </MenuItem>
          </Menu>
        </Grid>
      ))}
    </Grid>
  );
};
export default ReadingList;