import { motion } from "framer-motion";
const Result = ({ name, age }) => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			Hello {name}, your age is {age}!
		</motion.div>
	);
};

export default Result;
