"use client";
import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const Post = ({ post }) => {

  const router = useRouter();
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [inputPostEdit, setinputPostEdit] = useState(post);

  const [modalOpenDelete, setModalOpenDelete] = useState(false);


  const handleEditSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    // setInputs({});
    axios.patch(`/api/posts/${post.id}`, inputPostEdit).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setModalOpenEdit(false);
      router.refresh();
    })
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputPostEdit(prevState => ({ ...prevState, [name]: value }))
  }

  // delete for post signal
  const handleDeletePost = (id) => {
    axios.delete(`/api/posts/${id}`).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setModalOpenDelete(false);
      router.refresh();
    })
  }

  return (
    <li className="p-3 bg-slate-200" key={post.id}>
      <h1 className="text-2xl font-bold"> {post.title} </h1>
      <p> {post.description} </p>

      <div className="pt-4">
        <button className="text-blue-700 mr-5" onClick={() => setModalOpenEdit(true)}>Edit</button>

        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form className="w-full" onSubmit={handleEditSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2"
              value={inputPostEdit.title || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="w-full p-2 my-3"
              value={inputPostEdit.description || ""}
              onChange={handleChange}
            />
            <button type="submit" className="bg-blue-700 text-white px-3 py-2">
              Submit
            </button>
          </form>
        </Modal>

        <button className="text-red-700" onClick={() => setModalOpenDelete(true)}>Delete</button>

        <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete}>
          <h1 className="text-2xl font-bold text-left">Are you sure you want to delete!!!</h1>

          <div className="flex mt-5">
            <button onClick={() => handleDeletePost(post.id)} className="text-blue-700 mr-10">Yes</button>
            <button onClick={() => setModalOpenDelete(false)} className="text-red-700">No</button>
          </div>
        </Modal>
      </div>
    </li>
  );
};

export default Post;
