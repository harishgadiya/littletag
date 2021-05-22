import { Footer, Header } from '../../organisms';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
