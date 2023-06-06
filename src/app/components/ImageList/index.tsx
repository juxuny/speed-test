"use client";

import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import InfiniteReload from "../InfiniteReload";

type ImageListProps = {};

const ImageList: React.FC<ImageListProps> = () => {
	const [ imageList, setImageList ] = useState<string[]>([]);


	const loadImageList = useCallback(async () => {
		try {
			const resp = await axios.get('/data/images.json');
			if (resp.status === 200 && resp.data?.list && resp.data?.list?.length > 0) {
				setImageList(resp.data.list);
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		loadImageList();
	}, [loadImageList]);

	return (
		<div>
			{
				imageList && imageList.map((item, index) => {
					return <InfiniteReload imageUrl={item} key={index}/>
				})
			}
		</div>
	);
}

export default ImageList;
