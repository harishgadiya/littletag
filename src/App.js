import { Route, Switch } from 'react-router-dom';

import { Checkout, Home, OrderSuccessful, Listing, Wishlist, ProfileDetails } from './Pages';
import PageTemplate from './components/templates/PageTemplate';
import ProductDetail from './Pages/ProductDetail';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PageTemplate>
      <Switch>
        <Route path="/order-successful" component={OrderSuccessful} />
        <Route path="/listing" component={Listing} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/profile" component={ProfileDetails} />
        <Route path="/productdetail/:id" component={ProductDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </PageTemplate>
  );
}

export default App;
