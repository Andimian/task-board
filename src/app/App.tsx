import { Header } from '@/widgets/header/ui/Header';
import { Day, getCurrentWeekRange, Schedule } from '@/entities/shedule';

function App() {
	// Получить текущую неделю
	const week: Day[] = getCurrentWeekRange();

	return (
		<>
			<Header/>
			<Schedule week={week} />
		</>
	);
}

export default App;

