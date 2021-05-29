import { Dropdown, DropdownButton } from 'react-bootstrap';
import './dropdown.scss';

const LittleTagDropdown = ({ type = 'simple', items, className, onChangeHandler, selectProps }) => {
  if (type === 'simple') {
    return (
      <select className={className} onChange={onChangeHandler} {...selectProps}>
        {items?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <Dropdown
        title="Dropdown button"
        className={className}
        onSelect={(a, e) => console.log('dropdown e =>', a, e.target.value)}
      >
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            href="#"
            value={item}
            onClick={(e) => console.log('dropdown item e =>', e.target.value)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown>
    );
  }
};

export default LittleTagDropdown;
