import { BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom'
import SimpleCard3 from './SimpleCard3'

const About = () => {

    const match = useRouteMatch()
return (
   <Router>
       <div>
            <Link to={`${match.url}/simplecard`}>SimpleCard</Link>
           <Switch>
               <Route path={`${match.path}/simplecard`} exact component={SimpleCard3} />                                 
           </Switch>
       </div>
   </Router>
)
}

export default About;