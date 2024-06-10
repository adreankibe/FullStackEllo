import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Container, Grid, Typography, Divider } from '@mui/material';
import SearchBar from './components/SearchBar';
// import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import client from './api/client';

const App = () => {
  const [searchBook, setSearchBook] = useState('');
  const [, setSelectedBook] = useState(null);
  const [readingList, setReadingList] = useState([]);

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeFromReadingList = (bookToRemove) => {
    setReadingList(readingList.filter(book => book.id !== bookToRemove.id));
  };

  return (
    <ApolloProvider client={client}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Book Finder
        </Typography>
        <SearchBar searchBook={searchBook} setSearchBook={setSearchBook} setSelectedBook={setSelectedBook} addToReadingList={addToReadingList}  />
        <Divider style={{ margin: '20px 0' }} />
        <Grid container spacing={3}>
          {/* <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              Search Results
            </Typography>
            <BookList book={selectedBook} addToReadingList={addToReadingList} />
          </Grid> */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Reading List
            </Typography>
            <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList} />
          </Grid>
        </Grid>
      </Container>
    </ApolloProvider>
  );
}

export default App;