import { nanoid } from 'nanoid';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageArray }) => (
  <ul className="ImageGallery">
    {imageArray.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        key={nanoid()}
        imageId={id}
        src={webformatURL}
        alt={tags}
      />
    ))}
  </ul>
);
export { ImageGallery };
