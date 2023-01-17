const Modal = ({ object, handleClose }) => {

  return (
    <div className="Overlay" onClick={handleClose}>
      <div className="Modal">
        <img
          src={object.largeImageURL}
          alt={object.tags}
        />
      </div>
    </div>
  );
};

export { Modal };
