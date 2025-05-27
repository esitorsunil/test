# React Notifications with Redux Toolkit

This project demonstrates how to integrate a notification panel using Redux Toolkit and a custom package `@esitorsunil/new-folder`.

## Setup

### 1. Install dependencies

```bash
npm install
Make sure to have your custom package installed:

npm install @esitorsunil/new-folder


2. Store Configuration (store/appStore.js)
Configure your Redux store to include the notifications reducer from the custom package:


import { configureStore } from '@reduxjs/toolkit';
import { notificationsReducer } from '@esitorsunil/new-folder';

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});


3. Usage in React App (App.jsx)
Wrap your app with Redux Provider and import the NotificationsPanel and pushNotification action from the package:


import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/appStore';
import { NotificationsPanel, pushNotification } from '@esitorsunil/new-folder';

function SomeComponent() {
  const dispatch = useDispatch();

  const handleAddNotification = () => {
    dispatch(pushNotification({
      id: Date.now(),
      type: 'success',
      message: 'Hello from SomeComponent!',
    }));
  };

  return (
    <div>
      <button onClick={handleAddNotification}>Show Notification</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>My React App</h1>
        <SomeComponent />
        <NotificationsPanel />
      </div>
    </Provider>
  );
}