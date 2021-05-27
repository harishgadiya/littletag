import { Dropdown } from 'react-bootstrap';
import './dropdown.scss';

const LittleTagDropdown = ({ items, className, onChangeHandler, selectProps }) => {
  return (
    // <Dropdown className={className}>
    //   <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
    //     {heading}
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     {items.map((item, index) => (
    //       <Dropdown.Item key={index} href="#" onSelect={(e) => console.log(e)}>
    //         {item}
    //       </Dropdown.Item>
    //     ))}
    //   </Dropdown.Menu>
    // </Dropdown>
    <select className={className} onChange={onChangeHandler} {...selectProps}>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default LittleTagDropdown;
