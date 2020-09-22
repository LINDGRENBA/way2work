import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewSurveyForm(props){

  const firestore = useFirestore();

  function addSurveyToFirestore(event) {
    event.preventDefault();

    props.onNewSurveyCreation();

    return firestore.collection('surveys').add(
      {
        q1: event.target.q1.value,
        q2: event.target.q2.value, 
        q3: event.target.q3.value
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={addSurveyToFirestore}
      buttonText="Add" />
    </React.Fragment>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurveyForm;