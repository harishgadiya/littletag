import { Route, Switch } from 'react-router-dom';

import { Checkout, Home, Product, Listing, Wishlist, ProfileDetails } from './Pages';
import PageTemplate from './components/templates/PageTemplate';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PageTemplate>
      <Switch>
        <Route path='/products' component={Product} />
        <Route path='/listing' component={Listing} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/profile' component={ProfileDetails} />
        <Route path='/' component={Home} />
      </Switch>
    </PageTemplate>
  );
}

export default App;
