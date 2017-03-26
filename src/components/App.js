import React, { Component } from 'react';
import '../templates/App.css';
import MarkdownAnalyzer from './MarkdownAnalyzer';
import MarkdownOutput from './MarkdownOutput';
import marked from 'marked';
import { Grid, Row} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.modifyMarkdownInput = this.modifyMarkdownInput.bind(this);
    marked.setOptions({
      sanitize: true
    })
    this.state = {
      markdownInput: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
    }
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
