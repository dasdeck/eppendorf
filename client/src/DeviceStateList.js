import React from 'react';

class DeviceStateList extends React.Component {

  constructor() {
    super()
    this.state = { entries: [] }
  }

  componentDidMount() {

    fetch(new Request('/devicestate'))
      .then(response => response.json())
      .then(data => {
        this.setState({ entries: data })
      })
  }

  deleteEntry(id) {
    fetch(new Request('/devicestate/' + id), {method: 'DELETE'}).then(() => {
      this.componentDidMount()
    })
  }

  render() {
    return (
      <div className="App">

        <ul>
          {this.state.entries.map(entry => {
            return <li
            // style={`color:${entry.color}`}
            key={`entrie-${entry.id}`}>{entry.location}>

            <button onClick={this.deleteEntry(entry.id)}>delete</button>
            </li>
          })}
        </ul>
      </div>
    );
  }

}

export default DeviceStateList;
