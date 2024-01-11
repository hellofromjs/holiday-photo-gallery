import { useEffect, useRef, useState } from "react"
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { FaPlusCircle } from "react-icons/fa"
import * as service from "../../services/TimesCrudService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const { Modal } = bootstrap

export default function AddPhotoModal() {
    const [user, _loading, _error] = useAuthState(auth);

    const [photoUrl, setPhotoUrl] = useState('https://media.istockphoto.com/id/1154783597/photo/idyllic-landscape-in-the-alps-with-blooming-meadows-in-springtime.jpg?s=1024x1024&w=is&k=20&c=igU9Lg7-AqGUQBkQwkmmzCf5HamYZ17P7thAKJPtfAc=')
    const modalRef = useRef()
    
    const showModal = () => {
        const modalEle = modalRef.current
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show()
    }
    
    const hideModal = () => {
        const modalEle = modalRef.current
        const bsModal= bootstrap.Modal.getInstance(modalEle)
        bsModal.hide()
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(photoUrl)

        service.addWork({ url: photoUrl, uid: user.uid });

        hideModal()
    }

    return(
        <div className="addEmployee">
            <button type="button" className="btn btn-primary" onClick={showModal}><FaPlusCircle size={20}/>Add Photo</button>
            <div className="modal fade" ref={modalRef} tabIndex="-1" >
             <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Photo URL:</label>
            <input onChange={(e)=>setPhotoUrl(e.target.value)} type="text" className="form-control" id="recipient-name"/>
          </div>
          <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
                    <button role="button" type="submit" className="btn btn-primary">Add</button>
        </form>
                  </div>
               
                </div>
              </div>
            </div>
        </div>
    )
}