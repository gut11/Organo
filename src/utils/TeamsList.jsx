import { useState } from "react";
import Database from "./Database";




function TeamsList() {
	
const [teamsListGetter, setterTeamsList] = useState([]);

function fetchTeamsList(){
	console.log("batata")
	Database.getUsers().then(
		res => {
			res.json().then(res =>{
				setterTeamsList([...res.teamsList])
			}
			)
		}
	)
}

function addTeamsList(newMember,teamName){
	Database.saveUser(newMember, teamName).then(res => {
		if(res.status === 200)
			fetchTeamsList();
	})
}

function removeMember(newMember, teamName){
	Database.removeUser(newMember,teamName).then(res => {
		if(res.status === 200)
			fetchTeamsList();
	})
}

return {fetchTeamsList,addTeamsList,removeMember,teamsListGetter};


}


export default TeamsList;


