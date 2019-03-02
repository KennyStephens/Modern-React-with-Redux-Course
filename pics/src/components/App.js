import axios from 'axios';
import React from "react";
import SearchBar from "./SearchBar";


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 22d217e0ebeba6b679983d65ae35473c2f216302d4b37fd6536149742b80e34a'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
