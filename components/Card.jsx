"use client";

import { motion } from "framer-motion";
import styles from "@/styles/card.module.scss";
import { useState } from "react";

const Card = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [state, setState] = useState("form");

	const handleSubmit = (e) => {
		e.preventDefault();
		setState("loading");

		setTimeout(() => {
			setState("result");
		}, 5000);
	};

	return (
		<motion.div
			className={styles.card}
			initial={{ scale: 0 }}
			animate={{ scale: 1, delay: 0.5 }}
			transition={{ type: "spring", stiffness: 200, damping: 20 }}
		>
			<div>
				{state === "form" && (
					<motion.form
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onSubmit={handleSubmit}
					>
						<div className={styles.parag}>
							Let the power of generative AI to figure out your name and age!
						</div>
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
					</motion.form>
				)}
				{state === "loading" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.loading}
					>
						Loading...
					</motion.div> // Loadingbar goes here.
				)}
				{state === "result" && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
						Hello {name}, your age is {age}!
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default Card;
