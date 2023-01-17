import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

import { Component } from 'react';
import { inquiry } from 'utils/Api/Api';

export class App extends Component {
  state = {
    photosArray: [],
    wanted: '',
    page: 1,
    totalPage: 0,
    isLoad: false,
  };

  handleSubmit = async e => {
    e.preventDefault();
    let totalPage = 0;
    let picturePerPage = 12;

    this.setState(prevState => ({ page: 1, isLoad: !prevState.isLoad }));
    let form = e.currentTarget.elements.search.value;
    try {
      const response = await inquiry(form, this.state.page);
      totalPage = Math.ceil(response.totalHits / picturePerPage);

      this.setState(() => ({
        wanted: form,
        photosArray: [...response.hits],
        totalPage: totalPage,
      }));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState(prevState => ({
        isLoad: !prevState.isLoad,
      }));
      e.target.reset();
    }

    console.log(form);
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState(prevState => ({ isLoad: !prevState.isLoad }));
      const response = await inquiry(this.state.wanted, this.state.page);
      const newPhotosArray = [...this.state.photosArray];
      newPhotosArray.push(...response.hits);
      console.log(newPhotosArray);
      this.setState(prevState => ({
        photosArray: [...newPhotosArray],
        isLoad: !prevState.isLoad,
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imageArray={this.state.photosArray} />
        <Loader isLoad={this.state.isLoad} />
        {this.state.totalPage > this.state.page &&
          this.state.isLoad === false && (
            <Button title="Load more" onClick={this.handleLoadMore} />
          )}
      </div>
    );
  }
}
