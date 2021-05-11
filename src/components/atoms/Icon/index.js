import { user, search, checkout, heart, edit, plus, minus, social } from '../../../assests/svg-icons';

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
    case 'edit':
      return edit;
    case 'plus':
      return plus;
    case 'minus':
      return minus;
    case 'social':
      return social;
    default:
      return null;
  }
};

const Icon = ({ name = 'user' }) => {
  return <img className='icon' src={getSvgIcon(name)}></img>;
};

export default Icon;
