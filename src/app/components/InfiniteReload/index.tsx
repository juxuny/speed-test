"use client";
import { useState } from "react";
type InfiniteReloadProps = {
	imageUrl?: string;
}
const InfiniteReload: React.FC<InfiniteReloadProps> = (props) => {
	const [ imageUrl ] = useState<string | undefined>(props.imageUrl);
	const [ timestamp, setTimestamp ] = useState<number | undefined>(0);
	const [ reloadCount, setReloadCount ] = useState<number>(0);

	const onLoad = () => {
		setTimestamp(new Date().getTime());
		setReloadCount((prevValue) => prevValue + 1);
	}

	return <div>
		<img width={100} height={100} src={`${imageUrl}?_t_=${timestamp}`} alt={imageUrl} onLoad={onLoad} />
		<a>{reloadCount}</a>
	</div>
}

export default InfiniteReload;
