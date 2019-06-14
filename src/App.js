import React from 'react';
import marked from 'marked';
import _ from 'lodash';

export default class App extends React.Component {

  state = {
    text: ''
  }

  constructor() {
    super();
    this.update = _.debounce(this.update, 300);
  }

  createMarkup() {
    return {
      __html: marked(this.state.text)
    }
  }

  update(text) {
    this.setState({
      text
    })
  }

  render() {
    return (
      <div style={{'padding': '20px'}}>
        <h1>Markdown Previewer</h1>
        <textarea
          style={{'padding': '5px'}} 
          placeholder="Type here, stupid..." 
          cols="50" 
          rows="10"
          onChange={(e) => this.update(e.target.value)}></textarea>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    )
  }
}