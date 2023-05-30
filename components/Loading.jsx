"use client";

import { motion } from "framer-motion";
import styles from "@/styles/loading.module.scss";
import { useState, useEffect } from "react";

const Loading = ({ duration }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const milestones = [22, 45, 85, 98, 100]; // Progress milestones
		const durations = [
			duration * 0.2,
			duration * 0.3,
			duration * 0.6,
			duration * 0.7,
			duration,
		];

		milestones.forEach((milestone, i) => {
			setTimeout(() => {
				setProgress(milestone);
			}, durations[i]);
		});
	}, [duration]);

	return (
		<div className={styles.container}>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: `${progress}%` }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 20,
					duration: 0.5,
				}}
				className={styles.loading}
			/>
		</div>
	);
};

export default Loading;
