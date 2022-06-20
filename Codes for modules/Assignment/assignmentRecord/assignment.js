import React from 'react';
import Dashboard from '../dashboard/dashboard';
import CreateAssignment from './createAssignment';
import GetAssignment from './getAssignment';
import SubmitAssignment from './submitAssignment';
import GetSubmitted from './submitted/getSubmitted';
import MarkSubmitted from './submitted/markSubmitted';
import SearchSubmitted from './submitted/searchSubmitted';
import ViewSubmitted from './submitted/viewSubmitted';
import UpdateAssignment from './updateAssignment';
import ViewAssignment from './viewAssignment';

export const Assignment = () => {
  return (
    <>
      <div className="container">
        <Dashboard />
        <GetAssignment />
      </div>
    </>
  )
}

export const AssignmentCreate = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <CreateAssignment />
    </div>
    </>
    )
}

export const AssignmentUpdate = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <UpdateAssignment />
    </div>
    </>
    )
}

export const AssignmentView = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <ViewAssignment />
    </div>
    </>
    )
}

export const AssignmentSubmit = () => {
  return (
  <>
  <div className='container'>
      <Dashboard />
      <SubmitAssignment />
  </div>
  </>
  )
}

export const Submitted = () => {
  return (
  <>
  <div className='container'>
      <Dashboard />
      <GetSubmitted />
  </div>
  </>
  )
}

export const SubmittedMark = () => {
  return (
  <>
  <div className='container'>
      <Dashboard />
      <MarkSubmitted />
  </div>
  </>
  )
}

export const SubmittedView = () => {
  return (
  <>
  <div className='container'>
      <Dashboard />
      <ViewSubmitted />
  </div>
  </>
  )
}

export const SubmittedSearch = () => {
  return (
  <>
  <div className='container'>
      <Dashboard />
      <SearchSubmitted/>
  </div>
  </>
  )
}

