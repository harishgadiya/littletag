import './image.scss';

const Image = ({ src, alt, className, ...other }) => {
  return (
    <div className='little-image' {...other}>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};

export default Image;
