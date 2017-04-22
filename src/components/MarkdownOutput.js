import React from 'react';
import { Col } from 'react-bootstrap';
import DOMPurify from 'dompurify';

const MarkdownOutput = (props) => {
  return (
    <Col md={6}>
      <span dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.output) }}></span>
    </Col>
  );
};

MarkdownOutput.propTypes = {
  output: React.PropTypes.string.isRequired
};

export default MarkdownOutput;