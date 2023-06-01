import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className='form-outer-wrapper'>
      <form
        className='form'
        action='https://formsubmit.co/dc734c4144a39d0767d0d689469a0ea1'
        method='POST'
      >
        <input
          className='email-input'
          type='email'
          name='email'
          placeholder='Email Address'
          required
        ></input>

        <textarea
          //   rows='5'
          //   cols='60'
          className='message-input'
          type='text'
          name='name'
          placeholder='Enter message here:'
          required
        ></textarea>

        <button className='form-btn' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}
