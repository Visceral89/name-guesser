"use client";

import { motion } from "framer-motion";
import styles from "@/styles/card.module.scss";
import { useState } from "react";
import Loading from "./Loading";
import Result from "./Result";

const Card = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [state, setState] = useState("form");
	const loadtime = 5000;

	const handleSubmit = (e) => {
		e.preventDefault();
		setState("loading");

		setTimeout(() => {
			setState("result");
		}, loadtime);
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
				{state === "loading" && <Loading duration={loadtime} />}
				{state === "result" && <Result name={name} age={age} />}
			</div>
		</motion.div>
	);
};

export default Card;
