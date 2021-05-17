import { Dropdown } from 'react-bootstrap';
import './index.scss';

const LittleTagDropdown = ({ heading, items }) => {
  return (
    <Dropdown>
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
