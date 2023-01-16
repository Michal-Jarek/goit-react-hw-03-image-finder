import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Component } from 'react';
import { inquiry } from 'utils/Api/Api';

export class App extends Component {

  state = {
    photosArray: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    
  }
  async componentDidMount() {
    const response = await inquiry('cat black', 1);
    this.setState({ photosArray: response });
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery imageArray={this.state.photosArray} />
      </div>
    );
  }
}
