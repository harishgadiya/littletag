import ProductCard from './ProductCard';
import CheckoutCard from './CheckoutCard';
import CategoryCard from './CategoryCard';
import AddressCard from './AddressCard';
import Login from './Login';
import GenderFilter from './GenderFilter';
import CheckboxesFilter from './CheckboxesFilter';
import RatingBar from './RatingBar';
import RatingBarFilter from './RatingBarFilter';
import RangeFilter from './RangeFilter';

export const addQuery = (history, key, value) => {
  let pathname = history.location.pathname;
  // returns path: '/app/books'
  let searchParams = new URLSearchParams(history.location.search);
  // returns the existing query string: '?type=fiction&author=fahid'
  searchParams.set(key, value);
  history.push({
    pathname: pathname,
    search: searchParams.toString(),
  });
};

export {
  CategoryCard,
  AddressCard,
  ProductCard,
  CheckoutCard,
  Login,
  GenderFilter,
  CheckboxesFilter,
  RatingBar,
  RatingBarFilter,
  RangeFilter,
};
