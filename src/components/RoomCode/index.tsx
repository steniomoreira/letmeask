import copyImg from '../../assets/images/copy.svg';
import { Button } from './styles';

type RoomCodeProps = {
	code: string
}

export function RoomCode(props: RoomCodeProps) {
	function copyRoomCodeToCliboard() {
		navigator.clipboard.writeText(props.code)
	}
	return (
		<Button className="room-code" onClick={copyRoomCodeToCliboard}>
			<div>
				<img src={copyImg} alt="Copy room code" />
			</div>
			<span>Sala {props.code}</span>
		</Button>
	);
}