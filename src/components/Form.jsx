import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
`;

const Row = styled.div`
  width: 100%;
`;

const Label = styled.label`

`;

const Input = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  color: #7c7c7c;
  border-bottom: 2px solid #ececec;
  border-left: 1px solid #f3f3f3;
  font-size: 1.25rem;
`;

const Button = styled.button`
  border: none;
  border-bottom: 2px solid #ececec;
  border-right: 1px solid #f3f3f3;
  background-color: #fff;
  color: #b7b7b7;
  cursor: pointer;
  padding-right: 10px;
  &:hover {
    text-decoration: underline;
  }
  &:before {
    content: '|';
    margin: 0 10px;
    color: #e4e4e4;
  }
`;

Form.Row = Row;
Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

Form.propTypes = {
  children: PropTypes.any,
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
