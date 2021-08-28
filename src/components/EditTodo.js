import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { editTodo } from '../actions'
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
import ReplyIcon from '@material-ui/icons/Reply';

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

function EditTodo(props) {
  const classes = useStyles();    
  const params = useParams();   
  const history = useHistory();    
  const handleLink = path => history.push(path)  
  let getTodo = props.todos.filter( t => t.id === params.id * 1)[0]    
  // 更新された場合の処理
  if(getTodo === undefined ) {     
    getTodo = { deadline:'', statedate:''}
    handleLink('/todoview')
  }

  const [todo, setTodo] = useState(getTodo)  
  const [deadline, setDeadline] = useState(getTodo.deadline)  
  const [startdate, setStartdate] = useState(getTodo.startdate)      

  const inputTodo = (e) => {
    const newTodo = todo
    newTodo[e.target.name] = e.target.value    
    setTodo(newTodo)    
  }  

  const editTodo = () => {    
    const newTodo = todo
    newTodo.deadline = deadline
    newTodo.startdate = startdate
    let count = 0    
    for(const t in newTodo){
        t !== '' && count++
    }
    if(count < 5){
      alert('記入されていない項目があります')
      return
    }    

    props.editTodo(newTodo)
    handleLink('/todoview')
  }

  const backPage = () => {
    handleLink('/todoview')
  }

  return (
    <Card className={classes.root} variant="outlined">
        <IconButton aria-label="add" onClick={backPage}>
            <ReplyIcon fontSize="large"/>Back            
        </IconButton>         
        <CardContent>
          <TextField
            name="ticket"
            label="チケット名"
            defaultValue={todo.ticket}
            className={clsx(classes.margin, classes.textField)} 
            onChange={inputTodo}     
          />
          <TextField
            name="detail"
            label="詳細"
            defaultValue={todo.detail}
            className={clsx(classes.margin, classes.textField)} 
            onChange={inputTodo}     
          />
          <TextField
            name="pic"
            label="担当者"
            defaultValue={todo.pic}
            className={clsx(classes.margin, classes.textField)} 
            onChange={inputTodo}     
          />
          <CardContent>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <>
                期限：
                <DatePicker name="deadline"
                    value={deadline} 
                    onChange={setDeadline}/>
                開始日：
                <DatePicker name="startdate" 
                    value={startdate}
                    onChange={setStartdate}/>  
                </>        
            </MuiPickersUtilsProvider>                              
          </CardContent>
      </CardContent>      
      <IconButton aria-label="add" onClick={editTodo}>
        Edit a Tichket<AddIcon fontSize="large"/>            
      </IconButton>  
    </Card>
  );
}

const mappingState = (state) =>{
    return { todos: state.todo.todos }
  }

const mapDispatchToProps = (dispatch) => {
      return {
        editTodo: (todo) => dispatch(editTodo(todo)),
      };
    };

export default connect(mappingState,mapDispatchToProps)(EditTodo)
