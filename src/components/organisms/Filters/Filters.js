import { Container, Title } from '../../atoms';
import {
  CheckboxesFilter as BrandsFilter,
  CheckboxesFilter as ColorsFilter,
  GenderFilter,
  RangeFilter,
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
      { label: 'White' },
      { label: 'Black' },
      { label: 'Red' },
      { label: 'Blue' },
      { label: 'Green' },
    ],
  };
  return (
    <Container className="filters">
      <Title {...{ text: 'Filters' }} />
      <RangeFilter />
      <GenderFilter />
      <RatingBarFilter />
      <BrandsFilter {...brandsFilter} />
      <ColorsFilter {...colorsFilter} />
    </Container>
  );
};

export default Filters;
