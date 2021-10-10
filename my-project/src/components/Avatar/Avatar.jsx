import React from 'react';
import style from './Avatar.module.css';

const Avatar = () => {
	return (
		<div>
			<img
				className={style.Avatar}
				src='https://i.pinimg.com/474x/98/cf/a9/98cfa96ced1efa096a5ce1265aa12c1e.jpg'
				alt=''
			/>
		</div>
	);
};

export default Avatar;
