import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {routeHome} from 'routes';






function App() {
  const renderRouteHome = ()=>{
      return routeHome.map((route,index)=>{
       return(<Route key={index} component={route.component} exact={route.exact} path={route.path}></Route>)
      })
  }
  return (
    <Router className="App">
      <Switch>
        {renderRouteHome()}
      </Switch>
    </Router>
  );
}

export default App;
