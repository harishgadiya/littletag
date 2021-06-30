import { Container, Title } from '../../atoms';
import {
  CheckboxesFilter as BrandsFilter,
  CheckboxesFilter as ColorsFilter,
  GenderFilter,
  RatingBarFilter,
} from '../../molecules';
import './filters.scss';

const Filters = () => {
  const brandsFilter = {
    title: 'Brands',
    items: [
      { label: 'Nike', id: 'nike' },
      { label: 'Rebook', id: 'rebook' },
      { label: 'Puma', id: 'puma' },
      { label: 'Wrogn', id: 'wrogn' },
      { label: 'Flying Machine', id: 'flying_machine' },
    ],
  };
  const colorsFilter = {
    title: 'Colors',
    items: [
      { label: 'White', id: 'white' },
      { label: 'Black', id: 'black' },
      { label: 'Red', id: 'red' },
      { label: 'Blue', id: 'blue' },
      { label: 'Green', id: 'green' },
    ],
  };
  return (
    <Container className="filters">
      <Title {...{ text: 'Filters', className: 'filter-heading' }} />
      <GenderFilter />
      <RatingBarFilter filter="rating" />
      <BrandsFilter filter="brand" {...brandsFilter} />
      <ColorsFilter filter="color" {...colorsFilter} />
    </Container>
  );
};

export default Filters;
