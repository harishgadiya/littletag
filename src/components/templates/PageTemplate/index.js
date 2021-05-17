import { Footer, Header } from '../../molecules';

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
