import { BrowserRouter as Router,
         Switch,
         Route,
         Link,
         useParams
} from 'react-router-dom'
import SimpleCard3 from './SimpleCard3'
import EditTodo from './EditTodo'
import AddTodo from './AddTodo'

const RouterApp = () => {
    return (
        <Router>
            <div>                
                <Switch>
                    <Route path='/todoadd' exact component={AddTodo} />
                    <Route path='/todoview' exact component={SimpleCard3} />
                    <Route path='/todoedit/:id' exact component={EditTodo} />     
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route>
                        <p>Not found</p>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const Home = () => {
    const {value} = useParams()

    return (
        <p>home{value}</p>
    )
}

export default RouterApp;