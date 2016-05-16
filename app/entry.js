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

var CreateNewPet = React.createClass({
  render: function() {
    return (
      <form>
      <label for="name">Name</label>
      <input type="text" name="name"/>
      <label name="nickName">nickName</label>
      <input type="text" name="nickName"/>
      <label for="favoriteActivity">favoriteActivity</label>
      <input type="text" name="favoriteActivity"/>
      <button type="submit">Create a Pet</button>
      </form>
    );
  }
});


ReactDom.render(<CreateNewPet></CreateNewPet>, document.getElementById('form'));
ReactDom.render(<App></App>, document.getElementById('app'));
