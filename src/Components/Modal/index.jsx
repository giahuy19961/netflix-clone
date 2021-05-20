import React from "react";
import ReactPlayer from "react-player";
function Modal({ trailer }) {
  return (
    <div
      className="modal fade"
      id="trailerModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
          <ReactPlayer
          className="trailer"
          width="100%"
          height="200px"
          url={trailer}
        />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
