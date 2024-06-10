import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const BookItem = ({ book, actionButton}) => {
    return (
        <ListItem>
            {ListItemAvatar && <ListItemAvatar>
                <Avatar src={book.coverPhotoURL} />
            </ListItemAvatar>}
            <ListItemText primary={book.title} secondary={`${book.author} - Level: ${book.readingLevel}`} />
            {actionButton && actionButton}
        </ListItem>
    );
}

export default BookItem;