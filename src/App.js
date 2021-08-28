import React from 'react';
import SimpleCard from './components/SimpleCard'
import RouterApp from './components/RouterApp'
// import SimpleCard3 from './components/SimpleCard3'
// import SimpleCard2 from './components/SimpleCard2'
import "./App.css";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App(props) {    

  return (
    <div className="App">      
      <Typography variant="h1" component="h2">
        Todo List
      </Typography>
      <RouterApp store={props.store}/>
      <Grid container spacing={1}>
        <Grid item >
          {/* <SimpleCard store={props.store} /> */}
        </Grid>
      </Grid>      
    </div>    
  );
}

export default App;
