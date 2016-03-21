import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Loading...'
    };

    this.fetchMessage();
  }

  fetchMessage() {
    fetch('/message.json')
      .then((response) => response.json())
      .then((data) => this.setState({ message: data.message }));
  }

  render() {
    return (
      <div className="hello">
        <h1 className="hello__message">{this.state.message}</h1>
      </div>
    );
  }
}
