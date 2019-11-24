import React from 'react';
import characters from './characters.json';
import Character from './components/Character';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {

  state = {
    characters: characters,
    selected: [],
    topScore: 0,
    score: 0,
    message: ""
  };

  selected = (e) => {
    const id = parseInt(e.target.id)
    const newSelected = this.state.selected
    if (this.state.selected.indexOf(id) === -1){
      newSelected.push(id)
      this.setState({selected: newSelected})
      this.setState({score: this.state.score + 1})
      this.setState({message: "Keep going!"})
      this.randomize()
    }
    else{
      this.setState({message: "Womp Womp"})
      if(this.state.score > this.state.topScore){
        this.setState({topScore: this.state.score})
      }
      this.setState({score: 0})
      this.setState({selected: []})
    }
  };

  randomize = () => {
    this.setState({characters: this.shuffleCharacters(this.state.characters)})
  };

  shuffleCharacters = (arr) => {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i +1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  };

  render(){
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
        <div className="container text-center">
          <div className="row">
            {characters.map(character => (
              <div className="col-lg-3 col-sm-12">
                <Character selected={this.selected} id={character.id} image={character.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };
}

export default App;
