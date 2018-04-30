import React from "react"

const Modal = (props) => (

    <div className="modal fade" id="pendingModal" tabIndex="-1" role="dialog" aria-labelledby="pendingModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-dark p-3">
                <div className="modal-header">
                    <h5 className="modal-title" id="pending">Roast Pending</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" >
                    {props.roast}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
);

export default Modal;