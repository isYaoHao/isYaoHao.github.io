import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SearchBar from "../components/AppBar"


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <SearchBar />
      <CssBaseline />
      <Container maxWidth="sm">
        

      </Container>
    </React.Fragment>
  );
}