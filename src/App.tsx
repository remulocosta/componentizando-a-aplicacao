import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleGetID(id: number): void {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar idCallback={handleGetID} />

      <Content genreId={selectedGenreId}/>
    </div>
  )
}
