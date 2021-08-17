import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type,
  name,
  value,
  errorMessage,
  label,
  onChange,
  onFocus,
  autoFocus,
}) {
  function handleChange(e) {
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  const setRef = useRef();

  useEffect(() => {
    if (autoFocus) {
      setRef.current.focus();
    }
  });

  return (
    <div className="input-field">
      <input
        id={`input_${name}`}
        className={`validate ${errorMessage && 'invalid'}`}
        ref={setRef}
        onChange={handleChange}
        onFocus={onFocus}
        value={value}
        type={type}
      />
      <label className="active" for={`input_${name}`}>
        {label}
      </label>
      {errorMessage && (
        <span className="helper-text" data-error={errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};
