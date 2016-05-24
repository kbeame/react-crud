const React = require('react');
const ReactDom = require('react-dom');
const $ = require('jquery');
const superagent = require('superagent');

var List = React.createClass({
  handleDeleteClick: function(e) {
    e.preventDefault();
    this.handlePetDelete();
  },
  handlePetDelete: function() {
    console.log(this.props._id);
    superagent
    .delete('http://localhost:5555/api/pet/' + this.props._id)
    .end((err) => {
      console.log(err);
      this.props.loadPetsFromServer();
    }
  );
  },
  render: function() {
    return (
      <li>
      (id: { this.props._id })  Name: { this.props.name } nickName: { this.props.nickName } favoriteActivity: { this.props.favoriteActivity }
      <button onClick={ this.handlePetDelete } type="submit">Delete a Pet</button>
      </li>
    );
  }
});


var App = React.createClass({
  getInitialState: function() {
    return {
      pets: []
    };
  },

  componentDidMount: function() {
    this.loadPetsFromServer();
  },

  loadPetsFromServer: function() {
    $.ajax({
      url: 'http://localhost:5555/api/pet',
      type: 'GET',
      success: function(pets) {
        this.setState({ pets: pets });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(status, err.toString());
      }
    });
  },
  handlePetSubmit: function(pets) {
    console.log(pets);
    superagent
    .post('http://localhost:5555/api/pet')
    .send(pets)
    .end((err) => {
      console.log(err);
      this.loadPetsFromServer();
    }
  );
  },
  render: function() {
    return (
      <section>
      <ul>
        { this.state.pets.map((pet) => {
          return (
            <List _id= {pet._id} name={pet.name} nickName={pet.nickName}
              favoriteActivity={pet.favoriteActivity}
              >
            </List>
          );
        })}
      </ul>
      <h2>
      Create Pet
      </h2>
      <CreateNewPet onPetSubmit={ this.handlePetSubmit } />
      </section>
    );
  }
});

var CreateNewPet = React.createClass({
  getInitialState: function() {
    return ({ name: '', nickName: '', favoriteActivity: '' });
  },
  nameInput: function(e) {
    this.setState({ name: e.target.value });
  },
  nickNameInput: function(e) {
    this.setState({ nickName: e.target.value });
  },
  favoriteActivityInput: function(e) {
    this.setState({ favoriteActivity: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var nickName = this.state.nickName.trim();
    var favoriteActivity = this.state.favoriteActivity.trim();
    if (!name || !nickName || !favoriteActivity) {
      return;
    }
    this.props.onPetSubmit({ name: name, nickName: nickName, favoriteActivity: favoriteActivity });
    this.setState({ name: '', nickName: '', favoriteActivity: '' });
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" value={this.state.name} onChange={this.nameInput}/>
      <label name="nickName" >nickName</label>
      <input type="text" name="nickName" value={this.state.nickName} onChange={this.nickNameInput}/>
      <label for="favoriteActivity">favoriteActivity</label>
      <input type="text" name="favoriteActivity" value={ this.state.favoriteActivity }
      onChange={ this.favoriteActivityInput }/>
      <button type="submit">Create a Pet</button>
      </form>
    );
  }
});

ReactDom.render(<App></App>, document.getElementById('app'));
