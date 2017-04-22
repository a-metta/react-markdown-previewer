import React from 'react';
import { Col } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

const MarkdownOutput = (props) => {
  return (
    <Col md={6}>
      <span dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.output) }}></span>
    </Col>
  );
};

MarkdownOutput.propTypes = {
  output: PropTypes.string.isRequired
};

export default MarkdownOutput;