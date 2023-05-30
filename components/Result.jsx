import { motion } from "framer-motion";
const Result = ({ name, age }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "spring", stiffness: 200, damping: 20 }}
		>
			Hello {name}, your age is {age}!
		</motion.div>
	);
};

export default Result;
