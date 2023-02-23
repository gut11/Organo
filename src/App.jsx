import { useEffect } from "react";
import Banner from "./components/Banner/Banner";
import CardForm from "./components/CardForm/CardForm";
import Footer from "./components/Footer/Footer";
import TeamsSection from "./components/TeamsSection/TeamsSection";
import TeamsList from "./utils/TeamsList";

function App() {
  const teamsListReturn = TeamsList();
  const fetchTeamsList = teamsListReturn.fetchTeamsList;
  const addTeamsList = teamsListReturn.addTeamsList;
	const removeMember = teamsListReturn.removeMember;
	const teamsListGetter = teamsListReturn.teamsListGetter;
  useEffect(() => {
     fetchTeamsList();
	  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Banner />
      <CardForm teamsList={teamsListGetter} addTeamsList={addTeamsList} removeMember={removeMember} refresh={fetchTeamsList}/>
      <TeamsSection teamsList={teamsListGetter} />
      <Footer />
    </div>
  );
}

export default App;
