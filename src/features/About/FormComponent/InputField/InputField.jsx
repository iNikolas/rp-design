import React, { useMemo } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import css from './InputField.module.css'

function InputField({
  type,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  as,
  rows,
  cautionMessage,
  pattern,
}) {
  const inputProps = useMemo(() => {
    const prop = {};
    if (as) prop.as = as;
    if (rows) prop.rows = rows;
    if (type) prop.type = type;
    if (pattern) prop.pattern = pattern;

    return prop;
  }, [as, rows, type]);
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Control
        value={value}
        onChange={(e) => onChange(e.nativeEvent.target.value)}
        required={required}
        placeholder={placeholder}
        {...inputProps}
      />
      {cautionMessage && (
        <Form.Control.Feedback className={css['feedback-form']} type="invalid">
          {cautionMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default InputField;

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.number,
  cautionMessage: PropTypes.string,
  pattern: PropTypes.string,
};
