import React from 'react';
import { Grid } from '@mui/material';
import BookThumbnail from './BookThumbnail';

const BookList = ({ books }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
          <BookThumbnail book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;