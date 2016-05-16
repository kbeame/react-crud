const React = require('react');
const ReactDom = require('react-dom');

const App = React.createClass({
  render: function() {
    return (
      <h1>Hello</h1>
    )
  }
});

ReactDom.render(<App></App>, document.getElementById('app'));
