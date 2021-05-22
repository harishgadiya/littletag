import {
  user,
  search,
  checkout,
  heart,
  edit,
  plus,
  minus,
  facebookButton,
  gmailButton,
  or,
  wishlist,
  star,
  starFilled,
  facebook,
  twitter,
  instagram,
} from '../../../assests/svg-icons';

import './icon.scss';

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
    case 'facebook-button':
      return facebookButton;
    case 'gmail-button':
      return gmailButton;
    case 'or':
      return or;
    case 'star':
      return star;
    case 'star-filled':
      return starFilled;
    case 'facebook':
      return facebook;
    case 'twitter':
      return twitter;
    case 'instagram':
      return instagram;
    case 'loginFb':
      return facebook;
    case 'loginGmail':
      return instagram;
    default:
      return null;
  }
};

const Icon = ({ name = 'user', className, ...other }) => {
  return <img className={`icon ${className}`} src={getSvgIcon(name)} {...other}></img>;
};

export default Icon;
