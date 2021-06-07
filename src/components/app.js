import React from 'react';
import unsplash from '../api/unsplash';
import Searchbar from './searchbar';
import ImageList from './imagelist';

class App extends React.Component {
  state = { images: [] };

  //async hold the requests
  onSearchSubmit = async term => {
    //method onSubmit
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });

    //promise => callback => async
    //async func hold till awaits doesnt excuted
    //awaits send request to unsplash and when it is ready it will be executed

    // .then(response => {
    //   console.log(response);
    // });
    //axios(,);two address first is the get address too and the second
    //is the object which will excute this request and bunch of options for modification
  };

  render() {
    return (
      <div className="ui container" style={{ margin: '2rem 0rem' }}>
        <Searchbar onSubmitBtn={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
