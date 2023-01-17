const ImageGalleryItem = ({ imageId, src, alt, handleClick }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={() => handleClick(imageId)}
      id={imageId}
      className="ImageGalleryItem-image"
      src={src}
      alt={alt}
    />
  </li>
);

export { ImageGalleryItem };
