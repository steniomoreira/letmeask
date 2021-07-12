import { useHistory, useParams } from 'react-router-dom';
import { FiSun, FiLock } from "react-icons/fi";

import { useRoom } from '../../hooks/useRoom';
import { useTheme } from '../../hooks/useTheme';

import Header from '../../components/Header';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';

import { database } from '../../services/firebase';
import { lighten } from 'polished';

import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import deleteImg from '../../assets/images/delete.svg';

import { Main } from './styles';

type RoomParams = {
	id: string
};

export function AdminRoom() {
	const { theme, toggleTheme } = useTheme();
	const history = useHistory();
	const params = useParams<RoomParams>();
	const roomId = params.id;
	const { title, questions} = useRoom(roomId);

	async function handleEndRoom() {
		await database.ref(`/rooms/${roomId}`).update({
			endedAt: new Date(),
		});

		history.push('/');
	}

	async function handleDeleteQuestion(questionId: string) {
		if (window.confirm('Tem certeza que você deseja exclir essa pergunta?')){
			await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
		}
	}

	async function handleCheckQuestionAsAnswered(questionId: string) {
		await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: true
		});
	}

	async function handleHighlightQuestion(questionId: string) {
		await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
			isHighlighted: true
		});
	}

	return (
		<>
			<Header>				
				<RoomCode code={roomId} />
				<Button 
					isOutlined 
					onClick={handleEndRoom}
					style={{background: theme.colors.input}}
					>
					Encerrar sala
				</Button>

				<FiLock className="btn-mobile" onClick={handleEndRoom} title='Encerrar sala'/>	

				<FiSun 
					onClick={()=>toggleTheme()}
					title={theme.mode === 'dark' ? 'Modo light' : 'Modo dark'} 
					color={theme.mode === 'dark' ? lighten(0.1, theme.colors.secondary) : theme.colors.primary}
				/>
			</Header>
			<Main>
				<div className="room-title">
					<h1>Sala {title}</h1>
					{questions.length > 0 && 
						<span>{questions.length} pergunta{questions.length !== 1 && 's'}</span>
					}
				</div>
				<div className="question-list">
					{questions.map(question => {
						return (
							<Question
								key={question.id}
								content={question.content}
								author={question.author}
								isAnswered={question.isAnswered}
								isHighlighted={question.isHighlighted}
							>
								{!question.isAnswered && (
									<>
										<button
											type="button"
											onClick={() => handleCheckQuestionAsAnswered(question.id)}
										>
											<img src={checkImg} alt="Marcar pergunta como respondida" />
										</button>
										<button
											type="button"
											onClick={() => handleHighlightQuestion(question.id)}
										>
											<img src={answerImg} alt="Dar destaque à pergunta" />
										</button>
									</>
								)}
								<button
									type="button"
									onClick={() => handleDeleteQuestion(question.id)}
								>
									<img src={deleteImg} alt="Remover pergunta" />
								</button>
							</Question>
						);
					})}
				</div>
			</Main>
		</>
	);
}