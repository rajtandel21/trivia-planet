import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layout';
import { Home, Game } from './pages';

class App extends React.Component {

    render() {
      return (
        <main>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />            
          </Switch>
          <Footer />
        </main>
      )
    }
  }


  export default App;