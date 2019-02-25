import React from "react";
import ReactDOM from "react-dom";

// Functional Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState()
        this.setState({ lat: position.coords.latitude });

        // Don't do direct assignment to state!!!
        // Like this: this.state.lat = position.coords.latitude;
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!!!
  render() {
    return (
      <div>
        Latitude: {this.state.lat} <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
