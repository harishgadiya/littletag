import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addQuery } from '..';
import fetchProductsAction from '../../../redux/actions/productListingAction';
import { TextInput } from '../../atoms';
import './SearchInput.scss';

const SearchInput = ({ loading, productList, fetchProducts, udpateState }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    // fetchProducts();
    let suggestions = [];
    const text = e.target.value;
    // if (text.length > 0) {
    //   // const regex = new RegExp(`^${text}`, `i`);
    //   suggestions = productList
    //     ?.filter((product) => `${product.title} ${product.description}`.toLowerCase().includes(text))
    //     .map((product) => product.title);
    // }
    setSearchTerm(text);
    // setSuggestions(suggestions);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      history.push('/listing');
      setTimeout(() => {
        addQuery(history, 'sTerm', searchTerm);
        udpateState(false);
      }, 0);
    }
  };

  // const suggestionSelected = (value) => {
  //   setSuggestions([]);
  //   setSearchTerm(value);
  //   history.push('/listing');
  //   setTimeout(() => {
  //     addQuery(history, 'sTerm', value);
  //     udpateState(false);
  //   }, 0);
  // };

  // const renderSuggestions = () => {
  //   if (suggestions?.length === 0) {
  //     return null;
  //   }
  //   return (
  //     <div className="suggestion-list">
  //       <ul>
  //         {suggestions?.map((title) => (
  //           <li key={title} onClick={(e) => suggestionSelected(title)}>
  //             {title}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };
  return (
    <div className="search-container">
      <TextInput
        placeholder="Search term and hit enter"
        autoFocus
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {loading && (
        <div className="spin-center-search">
          <Spinner animation="border" />;
        </div>
      )}
      <span className="close-icon" onClick={() => udpateState(false)}>
        X
      </span>
      {/* {renderSuggestions()} */}
    </div>
  );
};

// export default SearchInput;
const mapStateToProps = (state) => {
  return {
    productList: state.products.products,
    loading: state.products.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProductsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
