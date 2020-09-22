import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='q1'
          placeholder='Enter your first question' />
        <input
          type='text'
          name='q1response1'
          placeholder='First answer' />
        <input
          type='text'
          name='q1response2'
          placeholder='Second answer' />
        <input
          type='text'
          name='q1response3'
          placeholder='Third answer' />
        <input
          type='q2'
          name='location'
          placeholder='Enter your second question' />
        <input
          type='text'
          name='q2response1'
          placeholder='First answer' />
        <input
          type='text'
          name='q2response2'
          placeholder='Second answer' />
        <input
          type='text'
          name='q2response3'
          placeholder='Third answer' />
        <input
          type='text'
          name='q3'
          placeholder='Enter your third question' />
        <input
          type='text'
          name='q3response1'
          placeholder='First answer' />
        <input
          type='text'
          name='q3response2'
          placeholder='Second answer' />
        <input
          type='text'
          name='q3response3'
          placeholder='Third answer' />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;