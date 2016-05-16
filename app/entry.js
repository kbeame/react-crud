const React = require('react');
const ReactDom = require('react-dom');
const $ = require('jquery');


var List = React.createClass({
  render: function () {
    return (
      <li>
        Name: {this.props.name} nickName: {this.props.nickName} favoriteActivity: {this.props.favoriteActivity}
      </li>
    )
  }
})

var App = React.createClass({
  getInitialState: function () {
    return {
      pets: []
    }
  },

  componentWillMount: function () {
    $.ajax({
      url: 'http://localhost:5555/api/pet',
      type: 'GET',
      success: function(pets) {
        this.setState({ pets: pets })
        console.log(pets);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <ul>
        {this.state.pets.map(function (pet) {
          return (
            <List name={pet.name} nickName={pet.nickName}
              favoriteActivity={pet.favoriteActivity}>
            </List>
          )
        })}
      </ul>
    )
  }
})



ReactDom.render(<App></App>, document.getElementById('app'));
