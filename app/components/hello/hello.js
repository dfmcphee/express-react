import React from 'react';
import styles from './hello.css';

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
      <h1 className={styles.hello}>{this.state.message}</h1>
    );
  }
}
