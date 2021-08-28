import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import { useHistory } from 'react-router-dom'

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
import CreateIcon from '@material-ui/icons/Create';

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

function SimpleCard3(props) {
  const classes = useStyles();            
  const history = useHistory();
  const handleLink = path => history.push(path)  

  const addTodo = () => {   
    handleLink('/todoadd')
  }

  const deleteTodo = (id) => {        
    props.deleteTodo(id) 
  }  

  useEffect(() => {
    
  },[props.todos]) 

  return (
    <Card className={classes.root} variant="outlined">        
        <CardContent>
        <CardContent>          
          <IconButton aria-label="add" onClick={addTodo}>
            Make a Ticket<AddIcon fontSize="large"/>            
          </IconButton>           
        </CardContent>
        { props.todos.length !== 0 ? 
        <TableContainer className={classes.tableRoot}>
        <Paper className={classes.paper}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>                
                <TableCell align="left">チケット名</TableCell>                
                <TableCell align="left">担当者</TableCell>
                <TableCell align="left">編集/削除</TableCell>            
              </TableRow>
            </TableHead>
            <TableBody>
            {props.todos.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th">
                  {row.id}
                </TableCell>                
                <TableCell component="th">
                  {row.ticket}
                </TableCell>
                <TableCell component="th">
                  {row.pic}
                </TableCell> 
                <TableCell align="left">
                  <IconButton  aria-label="edit" onClick={() => handleLink('/todoedit/' + row.id)}>  
                    <CreateIcon />
                  </IconButton>
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

const mappingState = (state) =>{
    return { todos: state.todo.todos }
  }

const mapDispatchToProps = (dispatch) => {
      return {        
        deleteTodo: (id) => dispatch(deleteTodo(id))
      };
    };

export default connect(mappingState,mapDispatchToProps)(SimpleCard3)
