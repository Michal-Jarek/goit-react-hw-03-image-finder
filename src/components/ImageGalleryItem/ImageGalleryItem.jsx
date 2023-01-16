
const ImageGalleryItem = ({ imageId, src, alt }) => (
  <li  className="ImageGalleryItem">
    <img id={imageId} className="ImageGalleryItem-image" src={src} alt={alt} />
  </li>
);

export { ImageGalleryItem };
