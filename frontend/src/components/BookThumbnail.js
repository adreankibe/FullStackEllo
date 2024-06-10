import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const BookThumbnail = ({ book }) => {
  const { coverPhotoURL, author, readingLevel, title } = book;
  const fullCoverPhotoURL = `http://localhost:3001/${coverPhotoURL}`;

  return (
    <Card style={{ maxWidth: '100%' }}>
      <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image={fullCoverPhotoURL}
        title={title}
      />
      <CardContent style={{ textAlign: 'center', height: '100px' }}>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          {author}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="p">
          Reading Level: {readingLevel}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookThumbnail;