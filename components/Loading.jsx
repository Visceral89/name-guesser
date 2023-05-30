import { motion } from "framer-motion";
import styles from "@/styles/loading.module.scss";
const Loading = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.loading}
		>
			Loading...
		</motion.div>
	);
};

export default Loading;
