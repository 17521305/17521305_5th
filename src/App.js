import React, {Component} from 'react';
import Films from './components/films'

class App extends Component {
  render() {
    return (
      <Films films={this.state.films} />
    )
  }
  state = {
    films: []
  };
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/17521305/17521305_5th/films')
        .then(res => res.json())
        .then((data) => {
            this.setState({ films: data })
        })
        .catch(console.log)
  }
}

export default App;