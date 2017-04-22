import React, { Component } from 'react';
import MarkdownAnalyzer from './MarkdownAnalyzer';
import MarkdownOutput from './MarkdownOutput';
import marked from 'marked';
import { Grid, Row} from 'react-bootstrap';
import dummyInput from './markdownDummyInput';

class App extends Component {
  constructor() {
    super();
    this.modifyMarkdownInput = this.modifyMarkdownInput.bind(this);
    marked.setOptions({
      sanitize: true
    });
    this.state = {
      markdownInput: dummyInput,
    };
  }
  modifyMarkdownInput(newMarkdown) {
    if(newMarkdown !== 'undefined') {
      this.setState({ markdownInput: newMarkdown });
    }
  }
  render() {
    return (
      <Grid>
        <Row>
          <MarkdownAnalyzer markdownInput={this.state.markdownInput} markdownChange={this.modifyMarkdownInput}/>
          <MarkdownOutput output={marked(this.state.markdownInput)}/>
        </Row>
      </Grid>

    );
  }
}

export default App;
