import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  boundSetVisFilter: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
