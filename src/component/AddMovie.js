import Modal from 'react-modal';
import React, { useState } from 'react'
import StarRating from './StarRating';


const AddMovie = ({handleAdd}) => {
    const [form, setForm] = useState({
        name:"",
        date:"",
        image:"",
        rate:1,
    })
    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const [modalIsOpen, setIsOpen] = useState(false);
Modal.setAppElement('#root');
 function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  const handlChange=(event) => {
    setForm({...form,[event.target.name]:event.target.value})
}
const handlSubmit=(e) => {
  e.preventDefault();
   let film={...form,id:Math.random()};
   handleAdd(film);
   closeModal();
   setForm({
      name:"",
      date:"",
      image:"",
      rate:1,
  })
}
const handelRate=(rate) => {
 setForm({...form,rating:rate})
}
    return (
        <div>
                 <button onClick={openModal} className="btn add-movie-btn"><h2>Add Movie</h2></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        
        <form onSubmit={handlSubmit}>
            <label>Name Movie</label>  
          <input type="text" value={form.name} name="name" onChange={handlChange}/>
          <label>Image</label>
          <input type="url" value={form.image} name="image"onChange={handlChange}/>
          <label>Date</label>  
          <input type="date" value={form.date} name="date" onChange={handlChange}/>
          <label>Rate</label>  
          <StarRating rate={form.rating} handelRate={handelRate} />
          <button className="btn btn-primary">Add</button>
          <button onClick={closeModal} className="btn btn-danger">cancel</button>
        </form>
      </Modal>
        </div>
    )
}

export default AddMovie
