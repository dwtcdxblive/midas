// React Frontend (Updated Page2 with Validation)
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Submit from '../assets/submit.png';
import { motion } from 'framer-motion';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  country: yup.string().required('Country is required')
});

const Page2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

const onSubmit = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users', data);
    // alert(response.data.message); // Show success message

    // Redirect to the Figma link
    window.location.href = 'https://www.figma.com/proto/lwmPai1cteztd5Kac8MqSE/Midas-Application-Prototype?page-id=22%3A2&node-id=25-24&viewport=-5955%2C-899%2C0.44&t=GJiSO8LlFjUGxSbh-1&scaling=contain&content-scaling=fixed&starting-point-node-id=25%3A24';
  } catch (error) {
    alert('Error submitting form');
  }
};

    const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    <div className='homepage2'>
      <div className='container'>
        <div className='row justify-content-center text-align'>
          <div className='col-md-10 text-center mt-forms'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3 row justify-content-center'>
                <label className='col-sm-2 label-styles'>First Name:</label>
                <div className='col-sm-4'>
                  <input type='text' className='form-control' {...register('firstName')} />
                  <p className='text-danger'>{errors.firstName?.message}</p>
                </div>
              </div>
              <div className='mb-3 row justify-content-center'>
                <label className='col-sm-2 label-styles'>Last Name:</label>
                <div className='col-sm-4'>
                  <input type='text' className='form-control' {...register('lastName')} />
                  <p className='text-danger'>{errors.lastName?.message}</p>
                </div>
              </div>
              <div className='mb-3 row justify-content-center'>
                <label className='col-sm-2 label-styles'>E-Mail:</label>
                <div className='col-sm-4'>
                  <input type='text' className='form-control' {...register('email')} />
                  <p className='text-danger'>{errors.email?.message}</p>
                </div>
              </div>
              <div className='mb-3 row justify-content-center'>
                <label className='col-sm-2 label-styles'>Country:</label>
                <div className='col-sm-4'>
                  <input type='text' className='form-control' {...register('country')} />
                  <p className='text-danger'>{errors.country?.message}</p>
                </div>
              </div>
              <button type='submit' className='bg-transparent'>
                <img src={Submit} alt='submit'/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Page2;
