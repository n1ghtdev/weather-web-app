import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from 'svg-react-loader!../../assets/svg/search-icon.svg';

const Form = styled.form`
  margin-left: auto;
  display: flex;
`;

const Label = styled.label``;

const Input = styled.input`
  background-color: #3171af;
  border: none;
  height: 42px;
  min-width: 200px;
  width: 100%;
  padding: 0 10px;
  font-size: 1.15rem;
  color: #fff;
`;

const ButtonWrapper = styled.button`
  background-color: #3171af;
  border: 1px solid transparent;
  color: #fff;
  height: 42px;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #2466a8;
    border: 1px solid #3171af;
    border-left: none;
  }
  &:focus {
    border: 1px dashed #fff;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  transform: rotate(90deg);
  & > path {
    fill: #fff;
  }
`;

const Button = () => (
  <ButtonWrapper>
    <StyledSearchIcon />
  </ButtonWrapper>
);

Form.propTypes = {
  active: PropTypes.bool,
};

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default Form;
