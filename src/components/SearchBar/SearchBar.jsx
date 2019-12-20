import React from 'react';
import { useDispatch } from 'react-redux';
import Form from './Form';
import { fetchForecast } from '../../modules/weather/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(fetchForecast(query));
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Label htmlFor="search-input">
        <Form.Input
          type="input"
          id="search-input"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form.Label>
      <Form.Button type="submit" />
    </Form>
  );
};

export default SearchBar;
