import { Route, Switch } from 'react-router-dom';

import Header from './components/molecules/Header';

import { Home, Product } from './Pages';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/molecules';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/products' component={Product} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
