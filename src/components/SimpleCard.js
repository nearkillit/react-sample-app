import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
// material ui
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// icon
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles( theme => ({
  root: {       
    width: '100%'
    // flexWrap: 'wrap',
  },
  formRoot:{
    display: 'flex',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    fontSize: 8,
    width: '60%',
  },
  addMoney: {
    width: '80%'
  },
  table: {
    minWidth: 650,
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  tableRoot: {
    width: '100%'
  }
}));

function SimpleCard() {
  const classes = useStyles();    
  const dispatch = useDispatch();
  const state = useSelector(state => state);    
  const [todo, setTodo] = useState('')  

  const inputTodo = (e) => {    
    setTodo(e.target.value) 
  }  

  const addTodo = () => {
    if(todo === ''){
      alert('todoが記入されていません')
      return
    }
    dispatch({ type:'ADD_TODO', todo})
  }

  const deleteTodo = (id) => {    
    dispatch({ type:'DELETE_TODO', id})  
  }

  useEffect(() => {
    
  },[state.todos]) 

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <form className={classes.formRoot}>          
          <TextField
            label="Todo"          
            className={clsx(classes.margin, classes.textField)} 
            onChange={inputTodo}     
          />
          <IconButton aria-label="add" onClick={addTodo}>
            <AddIcon fontSize="large"/>            
          </IconButton>           
        </form>
        { state.todos.length !== 0 ? 
        <TableContainer className={classes.tableRoot}>
        <Paper className={classes.paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>                
                <TableCell align="left">Todo</TableCell>
                <TableCell align="left">Edit/Delete</TableCell>            
              </TableRow>
            </TableHead>
            <TableBody>
            {state.todos.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>                
                <TableCell align="left">{row.todo}</TableCell>
                <TableCell align="left">
                  <IconButton aria-label="delete" onClick={() => deleteTodo(row.id)}>
                    <DeleteIcon/>            
                  </IconButton>                                
                </TableCell>                            
              </TableRow>
            ))}
            </TableBody>
          </Table>        
        </Paper>
        </TableContainer> 
        :
        <Typography variant="h5" component="h4">
          no data
        </Typography>
      }
        
      </CardContent>      
    </Card>
  );
}

export default SimpleCard;
