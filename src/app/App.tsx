import {Header} from "@/widgets/header/ui/Header";
import {Day, getCurrentWeekRange, Week} from "@/entities/shedule";

function App() {
// Получить текущую неделю
    const week: Day[] = getCurrentWeekRange();

  return (
      <>
        <Header/>
        <Week/>
      </>
  );
}

export default App;

