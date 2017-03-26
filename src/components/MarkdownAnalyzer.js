import React, { Component } from 'react';
import { Col, FormControl } from 'react-bootstrap';

class MarkdownAnalyzer extends Component {
  constructor() {
    super();
    this.analyzeMarkdown = this.analyzeMarkdown.bind(this);
  }
  analyzeMarkdown(e) {
    e.preventDefault();
    this.props.markdownChange(e.target.value);
  }
  render() {
    return (
      <Col md={6}>
        <FormControl 
          componentClass="textarea"
          rows="20"
          onChange={(e) => this.analyzeMarkdown(e)}
          value={this.props.markdownInput}
          />
      </Col>
    );
  }
}

MarkdownAnalyzer.propTypes = {
  markdownInput: React.PropTypes.string.isRequired,
  markdownChange: React.PropTypes.func.isRequired
}

export default MarkdownAnalyzer;

