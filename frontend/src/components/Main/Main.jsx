'use client';

import { useState } from 'react';
import Header from '../Header/Header';
import NoteCreator from '../NoteCreator/NoteCreator';
import NotesArea from '../NotesArea/NotesArea';
import './Main.css';
import Login from '../Login/Login';

export default function Main() {
  const [screen, setScreen] = useState(0);

  const changeScreen = () => {
    (screen === 1)?setScreen(2):setScreen(1)
  };

  return (
    <main style={{width: '100vw', height: '100vh'}}>
      {screen === 2 ? (
        <NoteCreator onClick={changeScreen} />
      ) : screen === 1 ? (
        <>
          <Header onClick={changeScreen} />
          <NotesArea />
        </>
      ) : (
        <Login />
      )}
    </main>
  );
}