import { useState, useEffect } from "react";
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

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)  

  const inputTodo = (e) => {    
    setTodo(e.target.value) 
  }  

  const addTodo = () => {
    if(todo === ''){
      alert('todoが記入されていません')
      return
    }
    const newId = id + 1
    setId(newId)
    console.log(todo);
    setTodos([ ...todos, {
      id: newId,
      todo
    }])
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter( t => {
      return t.id !== id
    })
    setTodos(newTodos)    
  }

  useEffect(() => {
    
  },[todos]) 

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
        { todos.length !== 0 ? 
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
            {todos.map((row) => (
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
