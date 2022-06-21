import React from 'react';
import Dashboard from '../dashboard/dashboard';
import CreateModule from './createModule';
import GetModule from './getModule';
import SearchModule from './searchModule';
import UpdateModule from './updateModule';
import ViewModule from './viewModule';

export const Module = () => {
  return (
    <>
    <div className='container'>
        <Dashboard />
        <GetModule />
    </div>
    </>
  )
}

export const ModuleCreate = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <CreateModule />
    </div>
    </>
    )
}

export const ModuleUpdate = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <UpdateModule />
    </div>
    </>
    )
}

export const ModuleView = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <ViewModule />
    </div>
    </>
    )
}

export const ModuleSearch = () => {
    return (
    <>
    <div className='container'>
        <Dashboard />
        <SearchModule />
    </div>
    </>
    )
}