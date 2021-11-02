import { Navbar } from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import { ProjectsPage} from './components/ProjectsPage.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <ProjectsPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
