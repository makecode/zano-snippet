import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ name, value, type, onChange }) => {
  return (
    <div className='text-field'>
      <input
        className='text-field__input'
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.oneOf([
    'text'
  ]),
  onChange: PropTypes.func
};

TextField.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  onChange: () => {}
};

export default TextField;
