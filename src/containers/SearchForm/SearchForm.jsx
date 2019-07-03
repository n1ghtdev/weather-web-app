import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';
import { getForecastByQuery } from '../../modules/weather/actions';

class SearchForm extends Component {
  static propTypes = {
    getForecastByQuery: PropTypes.func,
  };
  state = {
    query: '',
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    this.props.getForecastByQuery(this.state.query);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Label htmlFor="search-input">
          <Form.Input
            type="text"
            id="search-input"
            value={this.state.query}
            name="query"
            onChange={this.onChange}
          />
        </Form.Label>
        <Form.Button type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = {
  getForecastByQuery,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchForm);
