import React from 'react';
import { connect } from 'react-redux';
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'
import { withFirestore, isLoaded } from 'react-redux-firebase';

class SurveyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      editing: false
    };
  }


render () {
  const auth = this.props.firebase.auth();
  let currentlyVisibleState = null;
  let buttonText = null;

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the surveys.</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    if (this.state.editing ) {      
      currentlyVisibleState = <EditSurveyForm survey = {this.state.selectedSurvey} onEditSurvey = {this.handleEditingSurveyInList} />
      buttonText = "Return to Surveys";
    } else if (this.state.selectedSurvey != null) {
      currentlyVisibleState = 
      <SurveyDetail 
        survey = {this.state.selectedSurvey} 
        onClickingDelete = {this.handleDeletingSurvey} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Surveys";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewSurveyForm onNewSurveyCreation={this.handleAddingNewSurveyToList}  />;
      buttonText = "Return to Surveys";
    } else {
      currentlyVisibleState = <SurveyList surveyList={this.props.masterSurveyList} onSurveySelection={this.handleChangingSelectedSurvey} />;
      buttonText = "Add Survey";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
    }
  }
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SurvetyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);
