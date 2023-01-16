import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { Component } from 'react';
import { inquiry } from 'utils/Api/Api';

export class App extends Component {
  state = {
    photosArray: [],
    wanted: '',
    page: 1,
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState(() => ({ page: 1 }));
    let form = e.currentTarget.elements.search.value;
    const response = await inquiry(form, this.state.page);
    this.setState(()=> ({ wanted: form, photosArray: [...response] }));
    e.target.reset();

    console.log(form);
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const response = await inquiry(this.state.wanted, this.state.page);
      const newPhotosArray = [...this.state.photosArray];
      newPhotosArray.push(...response);
      console.log(newPhotosArray);
      this.setState(() => ({
        photosArray: [...newPhotosArray],
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imageArray={this.state.photosArray} />
        {this.state.photosArray.length > 0 && (
          <Button title="Load more" onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
