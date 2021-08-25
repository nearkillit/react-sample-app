import React from 'react';
import SimpleCard from './components/SimpleCard'
import "./App.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App() {    

  return (
    <div className="App">
      <Typography variant="h1" component="h2">
        Todo List
      </Typography>
      <Grid container spacing={1}>
        <Grid item >
          <SimpleCard />
        </Grid>
      </Grid>      
    </div>    
  );
}

export default App;
