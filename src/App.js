import React from 'react';
import SimpleCard from './components/SimpleCard'
import SimpleCard2 from './components/SimpleCard2'
import "./App.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App(props) {    

  return (
    <div className="App">
      <Typography variant="h1" component="h2">
        Todo List
      </Typography>
      <Grid container spacing={1}>
        <Grid item >
          <Typography variant="h6" component="h6">
            Hooks
          </Typography>
          <SimpleCard/>
        </Grid>
        <Grid item >
          <Typography variant="h6" component="h6">
            connect
          </Typography>
          <SimpleCard2 store={props.store} />
        </Grid>
      </Grid>      
    </div>    
  );
}

export default App;
