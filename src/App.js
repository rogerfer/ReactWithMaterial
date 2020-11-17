import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {

  state = {
    avatarId: 51,
    personName: 'Carlos Machado'

  }

modifyAvatar = () => {
  this.setState({
    avatarId:65,
    personName: 'Aníbal Machado'
  })
}

  render() {
    return (
      <div className="container">
        <div className="row">
            <Card name={this.state.personName} job="Teacher" avatarId={this.state.avatarId}/>
            <Card name="Filipa Machado" job="Nurse" avatarId={47}/>
            <Card name="Jorge Cunha" job="Bus Driver" avatarId={55}/>
        </div>
        <div class="row">
          <div class="col-md-3">
              <a onClick={this.modifyAvatar} className="modifyAvatar" href="#">Change Info</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;