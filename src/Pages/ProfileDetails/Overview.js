import { useSelector } from 'react-redux';
import { Image } from '../../components/atoms';
import './overview.scss';

const Overview = () => {
  const { user } = useSelector((state) => state);
  return (
    <div className="overview">
      <div className="row p-section">
        <div className="col-3">
          <Image src={user?.ptofilePic || 'https://constant.myntassets.com/mymyntra/assets/img/default-image.png'} />
        </div>
        <div className="col-9">
          <h3>{user?.name}</h3>
          <h5 className="my-3">{user?.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default Overview;
