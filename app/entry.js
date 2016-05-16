const React = require('react');
const ReactDom = require('react-dom');
// const fetch = require('whatwg-fetch');
const $ = require('jquery');

var pets = [
    {
        "__v": 0,
        "_id": "5738f17b267b824d25c6db3d",
        "favoriteActivity": "cuddles",
        "name": "Ellie",
        "nickName": "toot"
    },
    {
        "__v": 0,
        "_id": "5738f17b267b824d25c6db3d",
        "favoriteActivity": "cuddles",
        "name": "Moose",
        "nickName": "toot"
    }
]
// var LoadPets = React.createClass({
//   getInitialState
// })

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



// this.pet = [];
//   this.getAll = () => {
//     $http.get(url + '/api/pet')
//     .then((res) => {
//       this.pet = res.data;
//     }, handleErrors.bind(this));
//   };
//   this.createPet = () => {
//     $http.post(url + '/api/pet', this.newPet)
//       .then((res) => {
//         this.pet.push(res.data);
//         this.newPet = null;
//       }, handleErrors.bind(this));
//   };
