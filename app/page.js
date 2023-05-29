import styles from "@/styles/page.module.scss";

import Card from "@/components/Card";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.heading}>
					Age <span className={styles.gradient}>Guesser!</span>
				</h1>
				<Card />
			</div>
		</main>
	);
}
