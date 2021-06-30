import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Breadcrumb.scss';

const CustomBreadcrumb = ({ name }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/listing">Listing</Breadcrumb.Item>
      <Breadcrumb.Item active>{name}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
