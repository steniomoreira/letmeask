import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import Aside from '../../components/Aside';
import ButtonTheme from '../../components/ButtonTheme';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';

import logoImg from './../../assets/images/logo.svg';
import logoImgWhite from './../../assets/images/logoWhite.svg';

import { Content } from './styles';

export function NewRoom() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    
    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <Content>
      <Aside />

      <main>
        <ButtonTheme toggleTheme={()=>toggleTheme()}/>
        <div className="main-content">
          <img src={theme.mode === 'dark' ? logoImgWhite: logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit" >
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </Content>
  );
}