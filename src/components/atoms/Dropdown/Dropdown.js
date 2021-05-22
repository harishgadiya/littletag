import { Dropdown } from 'react-bootstrap';
import './dropdown.scss';

const LittleTagDropdown = ({ heading, items, className }) => {
  return (
    <Dropdown className={className}>
      <Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
        {heading}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} href='#/action-1'>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LittleTagDropdown;
