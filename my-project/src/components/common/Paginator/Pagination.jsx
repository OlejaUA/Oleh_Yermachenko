import React, { useState } from "react";
import style from "./Pagination.module.css";
import cn from "classnames";

let Pagination = ({ itemTotalCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
	let pagesCount = Math.ceil(itemTotalCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	return (
		<div className={style.Pagination}>
			{portionNumber >= 1 && (
				<button
					disabled={portionNumber === 1}
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}
				>
					Prev
				</button>
			)}
			{pages
				.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => (
					<span
						className={cn({ [style.currentPage]: currentPage === p }, style.pageNumber)}
						onClick={() => {
							onPageChanged(p);
						}}
					>
						{p}
					</span>
				))}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1);
					}}
				>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;
