import { Body, Card, Icon, Tag, Title } from '../../atoms';
import './addressCard.scss';

const AddressCard = () => {
  return (
    <Card className='address-card'>
      <div className='tag-edit'>
        <Tag {...{ text: 'Home' }} />
        <Icon name='edit' />
      </div>
      <div className='name-mobile'>
        <Title {...{ text: 'Durgesh Singh' }} />
        <Title className='mobile' {...{ text: '9807025178' }} />
      </div>
      <div className='address'>
        <Body
          {...{ text: 'House number: 3817, Gali Number 72 Moradabad Extension, New Delhi, Delhi - 110044' }}
        />
      </div>
    </Card>
  );
};
export default AddressCard;
