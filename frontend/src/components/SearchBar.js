import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { TextField, IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar, ClickAwayListener } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FETCH_BOOKS = gql`
  query FetchBooks($search: String!) {
    books(search: $search) {
      coverPhotoURL
      author
      readingLevel
      title
    }
  }
`;

const SearchBar = ({ setSearchBook, addToReadingList }) => {
  const [search, setSearch] = useState('');
  const { loading, error, data } = useQuery(FETCH_BOOKS, {
    variables: { search },
    skip: !search,
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setSearchBook(event.target.value);
  };

  const handleBlur = () => {
    setSearch('');
  };

  return (
    <ClickAwayListener onClickAway={handleBlur}>
      <div>
        <TextField
          label="Search for a book"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
        {search && !loading && !error && data && (
          <List>
            {data.books.map((book) => (
              <ListItem key={book.title}>
                <ListItemAvatar>
                  <Avatar alt={book.title} src={book.coverPhotoURL} />
                </ListItemAvatar>
                <ListItemText primary={book.title} />
                <IconButton onClick={() => addToReadingList(book)}>
                  <AddIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;