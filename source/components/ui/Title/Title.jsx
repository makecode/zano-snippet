import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Title = (props) => (
  <h1 className={classnames('title', { 'centred': props.centred, 'small': props.small })}>
    {props.title.map((word, index) => (
      <span className={classnames('title__word', { 'blue': word.blue })} key={index}>{word.title}</span>
    ))}
    <span className={classnames('title__shadow', props.shadowAlign)}>{props.shadow}</span>
  </h1>
);

Title.propTypes = {
  title: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      blue: PropTypes.bool
    })
  ).isRequired,
  shadow: PropTypes.string,
  shadowAlign: PropTypes.oneOf(['left', 'right']),
  centred: PropTypes.bool,
  small: PropTypes.bool,
};

Title.defaultProps = {
  title: [],
  shadow: '',
  centred: false,
  small: false,
}

export default Title;
