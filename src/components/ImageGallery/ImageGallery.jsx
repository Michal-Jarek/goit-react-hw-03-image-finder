import { nanoid } from 'nanoid';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imageArray }) => (
  <ul className="ImageGallery">
    {imageArray.map(({ id, previewURL, tags }) => (
      <ImageGalleryItem
        key={nanoid()}
        imageId={id}
        src={previewURL}
        alt={tags}
      />
    ))}
  </ul>
);
export { ImageGallery };
