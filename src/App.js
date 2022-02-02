import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import NotFound from './pages/NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import mockCats from './mockCats.js'
import './App.css'
import NotFoundSphinx from './assets/notFoundSphinx.svg'



class App extends Component {
    constructor(props){
      super(props)
        this.state = {
          cats: mockCats
        }
    }


  render() {
    return(
    <div>
      <Header />
        <h1>App.js page</h1>
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/catindex" component={CatIndex} />
                  <Route path="/catshow" component={CatShow} />
                  <Route path="/catnew" component={CatNew} />
                  <Route path="/catedit" component={CatEdit} />
                  <Route component={NotFound}/>
              </Switch>
          </Router>
      <Footer />
    </div>
    )
  }
}

export default App;
