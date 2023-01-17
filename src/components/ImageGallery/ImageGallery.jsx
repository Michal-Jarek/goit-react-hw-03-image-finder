import { nanoid } from 'nanoid';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageArray, children }) => (
  <ul className="ImageGallery">
    {imageArray.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        key={nanoid()}
        imageId={id}
        src={webformatURL}
        alt={tags}
      />
    ))}
    {children}
  </ul>
);
export { ImageGallery };
