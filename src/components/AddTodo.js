import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { useHistory, useParams } from 'react-router-dom'

// material ui
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
    DatePicker,    
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { alpha } from '@material-ui/core/styles';

// icon
import AddIcon from '@material-ui/icons/Add';

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

function AddTodo(props) {
  const classes = useStyles();         
  const [todo, setTodo] = useState({ ticket:'test', detail:'test', pic:'test'})  
  const [deadline, setDeadline] = useState(new Date())  
  const [startdate, setStartdate] = useState(new Date())  
  const history = useHistory();
  const handleLink = path => history.push(path)  

  const inputTodo = (e) => {
    const newTodo = todo
    newTodo[e.target.name] = e.target.value          
    setTodo(newTodo)        
  }  

  const addTodo = () => {
    const newTodo = todo
    newTodo.deadline = deadline
    newTodo.startdate = startdate
    let count = 0    
    for(const t in newTodo){
        count++
    }
    if(count < 5){
      alert('記入されていない項目があります')
      return
    }    

    props.addTodo(newTodo)
    handleLink('/todoview')
  }

  useEffect(() => {    
    
  },[deadline,startdate]) 

  return (
    <Card className={classes.root} variant="outlined">        
        <CardContent>
          <TextField
            name="ticket"
            label="チケット名"
            className={clsx(classes.margin, classes.textField)}
            defaultValue={todo.ticket} 
            onChange={inputTodo}     
          />
          <TextField
            name="detail"
            label="詳細"
            className={clsx(classes.margin, classes.textField)} 
            defaultValue={todo.detail}
            onChange={inputTodo}     
          />
          <TextField
            name="pic"
            label="担当者"
            className={clsx(classes.margin, classes.textField)} 
            defaultValue={todo.pic}
            onChange={inputTodo}     
          />
          <CardContent>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                期限：
                <DatePicker name="deadline"
                    value={deadline} 
                    onChange={setDeadline}/>
                開始日：
                <DatePicker name="startdate" 
                    value={startdate}
                    onChange={setStartdate}/>          
            </MuiPickersUtilsProvider>                              
          </CardContent>
      </CardContent>      
      <IconButton aria-label="add" onClick={addTodo}>
        Add a Tichket<AddIcon fontSize="large"/>            
      </IconButton>  
    </Card>
  );
}

const mappingState = (state) =>{
    return { todos: state.todo.todos }
  }

const mapDispatchToProps = (dispatch) => {
      return {
        addTodo: (todo) => dispatch(addTodo(todo)),
      };
    };

export default connect(mappingState,mapDispatchToProps)(AddTodo)
