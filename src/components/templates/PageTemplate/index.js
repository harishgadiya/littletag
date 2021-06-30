import { Footer, Header } from '../../organisms';

import './pageTemplate.scss';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default PageTemplate;
