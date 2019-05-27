import React from 'react';
import DataTable from './Components/DataTable';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import './App.css';
import './Pillitem.css';
import Details from './Components/Detail';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component ={DataTable}/>
          <Route path="/details" component = {Details}  render = {(props:any) => (
                        <Details {...props} />
                    )
                    }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
