import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import Aside from '../../components/Aside';
import ButtonTheme from '../../components/ButtonTheme';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';

import logoImg from './../../assets/images/logo.svg';
import logoImgWhite from './../../assets/images/logoWhite.svg';
import googleIconImg from './../../assets/images/google-icon.svg';

import { Content } from './styles';

export function Home() {
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();
	const [roomCode, setRoomCode] = useState('');
	const {theme, toggleTheme } = useTheme();

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}

		history.push('/rooms/new');
	}

	async function handleJoinRoom(event: FormEvent) {
		event.preventDefault();

		if (roomCode.trim() === '') {
			return;
		}

		const roomRef = await database.ref(`/rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			alert('Room does not exists.');
			return;
		}

		if (roomRef.val().endedAt) {
			alert('Room already closed.');
			return;
		}

		history.push(`/rooms/${roomCode}`);
	}

	return (
		<Content>
			<Aside />

			<main>
				<ButtonTheme toggleTheme={()=>toggleTheme()}/>
				<div className="main-content">
					<img src={theme.mode === 'dark' ? logoImgWhite: logoImg} alt="Letmeask" />
					<button className="create-room" onClick={handleCreateRoom}>
						<img src={googleIconImg} alt="Logo do Google" />
						Crie sua salas com o Google
					</button>
					<div className="separator">Ou entre em uma sala</div>
					<form onSubmit={handleJoinRoom}>
						<input
							type="text"
							placeholder="Digite o código da sala"
							onChange={event => setRoomCode(event.target.value)}
							value={roomCode}
						/>
						<Button type="submit" >
							Entrar na sala
						</Button>
					</form>
				</div>
			</main>
		</Content>
	);
}