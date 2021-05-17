import {
  user,
  search,
  checkout,
  heart,
  edit,
  plus,
  minus,
  social,
  facebook,
  gmail,
  or,
  wishlist,
} from '../../../assests/svg-icons';

import './index.scss';

const getSvgIcon = (name) => {
  switch (name) {
    case 'user':
      return user;
    case 'search':
      return search;
    case 'checkout':
      return checkout;
    case 'heart':
      return heart;
    case 'wishlist':
      return wishlist;
    case 'edit':
      return edit;
    case 'plus':
      return plus;
    case 'minus':
      return minus;
    case 'social':
      return social;
    case 'facebook':
      return facebook;
    case 'gmail':
      return gmail;
    case 'or':
      return or;
    default:
      return null;
  }
};

const Icon = ({ name = 'user', className, ...other }) => {
  return <img className={`icon ${className}`} src={getSvgIcon(name)} {...other}></img>;
};

export default Icon;
