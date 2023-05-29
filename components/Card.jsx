"use client";

import { motion } from "framer-motion";
import styles from "@/styles/card.module.scss";
import { useState } from "react";

const Card = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitted(true);
			setIsSubmitting(false);
		}, 5000);
	};

	if (isSubmitting) {
		return <div>Loading...</div>;
	}

	if (isSubmitted) {
		return (
			<div>
				Hello {name}, your age is {age}!
			</div>
		);
	}

	return (
		<motion.div
			className={styles.card}
			initial={{ scale: 0 }}
			animate={{ scale: 1, delay: 0.5 }}
			transition={{ type: "spring", stiffness: 200, damping: 15 }}
		>
			<div>Please enter your name and age to calculate your REAL age!</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="text"
						placeholder="Age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						required
					/>
					<button type="submit" className={styles.btn}>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default Card;
