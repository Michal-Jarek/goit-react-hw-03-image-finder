const Modal = ({ object, handleClose }) => {
    console.log(object);

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
