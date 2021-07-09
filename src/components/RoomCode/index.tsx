import { useContext} from "react";
import { ThemeContext } from 'styled-components';
import { FiClipboard } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';

import copyImg from './../../assets/images/copy.svg';

import { Button } from './styles';

type RoomCodeProps = {
	code: string
}

export function RoomCode(props: RoomCodeProps) {
	const {colors} = useContext(ThemeContext);

	function copyRoomCodeToCliboard() {
		navigator.clipboard.writeText(props.code);
		toast.success('Código copiado com sucesso!',
		{		
			style: {
			  borderRadius: '15px',
			  background: colors.input,
			  color: colors.text,
			},
		});
	}
	return (
		<>
			<Toaster position="top-center" reverseOrder={false} />
			<Button className="room-code" onClick={copyRoomCodeToCliboard}>
				<div>
				<img src={copyImg} alt="Copy room code" />
				</div>
				<span>Sala ${props.code}</span>
			</Button>
			{/* <FiClipboard onClick={copyRoomCodeToCliboard} title={`Sala ${props.code}`}/> */}
		</>
	);
}