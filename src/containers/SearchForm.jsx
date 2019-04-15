import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import { getForecastByQuery } from '../modules/weather/actions';

class SearchForm extends Component {
  static propTypes = {
    getForecastByQuery: PropTypes.func,
  };
  state = {
    query: '',
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.props.getForecastByQuery(this.state.query);
  }
  render() {
    return (
      <Container>
        <Row Padding="20px 0">
          <Col lg={8} Margin="0 auto">
            <Form onSubmit={this.onSubmit}>
              <Form.Row>
                <Form.Label htmlFor="search-input">
                  <Form.Input
                    type="text"
                    id="search-input"
                    value={this.state.query}
                    name="query"
                    onChange={this.onChange}
                  />
                </Form.Label>
              </Form.Row>
              <Form.Button type="button">Search</Form.Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  getForecastByQuery,
};

export default connect(null, mapDispatchToProps)(SearchForm);
