import { connect } from 'react-redux'
import { Component } from 'react'
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

class SimpleCard2 extends Component {
  
    constructor(props){
        super(props)
        this.todo = ''         
        this.inputTd = this.inputTd.bind(this)
        this.addTd = this.addTd.bind(this)
        this.deleteTd = this.deleteTd.bind(this)        
    }              

  inputTd(e){    
    this.todo = e.target.value
  }  

  addTd(){
    if(this.todo === ''){      
      alert('todoが記入されていません')
      return
    }        
    this.props.addTodo(this.todo)
  }

  deleteTd(id){
    this.props.deleteTodo(id)
  }

  render(){
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
      
  return (
    <Card className={useStyles.root} variant="outlined">
        <IconButton aria-label="add" onClick={this.addTd}>
            <AddIcon fontSize="large"/>            
        </IconButton>     
      <CardContent>
        <div style={useStyles.formRoot}>          
          <TextField
            label="Todo"          
            className={clsx(useStyles.margin, useStyles.textField)} 
            onChange={this.inputTd}     
          />
          <IconButton aria-label="add" onClick={this.addTd}>
            <AddIcon fontSize="large"/>            
          </IconButton>           
        </div>
        { this.props.todos.length !== 0 ? 
        <TableContainer className={useStyles.tableRoot}>
        <Paper className={useStyles.paper}>
          <Table className={useStyles.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>                
                <TableCell align="left">Todo</TableCell>
                <TableCell align="left">Edit/Delete</TableCell>            
              </TableRow>
            </TableHead>
            <TableBody>
            {this.props.todos.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>                
                <TableCell align="left">{row.todo}</TableCell>
                <TableCell align="left">
                  <IconButton aria-label="delete" onClick={() => this.deleteTd(row.id)}>
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
}

const mappingState = (state) =>{
    return { todos: state.todos }
  }

const mapDispatchToProps = (dispatch) => {
      return {
        addTodo: (todo) => dispatch({ type:'ADD_TODO', todo }),
        deleteTodo: (id) => dispatch({ type:'DELETE_TODO', id })
      };
    };

SimpleCard2 = connect(mappingState,mapDispatchToProps)(SimpleCard2)

export default SimpleCard2;
