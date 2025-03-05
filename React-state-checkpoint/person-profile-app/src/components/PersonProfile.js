import React, { Component } from 'react';

class PersonProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Mohamed Limem',
        bio: 'A passionate software developer with 5 years of experience.',
        imgSrc: 'https://via.placeholder.com/150', 
        profession: 'Software Developer',
      },
      shows: false,
      mountTime: new Date(),
      timeSinceMount: 0,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      const timeSinceMount = Math.floor((now - this.state.mountTime) / 1000);
      this.setState({ timeSinceMount });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default PersonProfile;