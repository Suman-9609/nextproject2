
"use client"
import { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddPost = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [inputs, setInputs] = useState({});
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
        // setInputs({});
        axios.post('/api/posts', inputs).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setInputs({});
            setModalOpen(false);
            router.refresh();
        })
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='bg-blue-700 text-white p-3 cursor-pointer'>Add New Post</button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form className='w-full' onSubmit={handleSubmit}>
                    <input type='text' name='title' placeholder='Title' className='w-full p-2' value={inputs.title || ""} onChange={handleChange} />
                    <input type='text' name='description' placeholder='Description' className='w-full p-2 my-3' value={inputs.description || ""} onChange={handleChange} />
                    <button type='submit' className='bg-blue-700 text-white px-3 py-2'>Submit</button>
                </form>
            </Modal>
        </div>
    )
}

export default AddPost