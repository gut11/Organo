import Form from "../Form/Form"
import Input from "../Input/Input"
import Button from "../Button/Button"
import Warning from "../Warning/Warning"
import { useState } from "react"

function CardForm(props) {
	const selectOptions = [
		"Programação",
		"Front-End",
		"Data Science",
		"Devops",
		"UX & Design",
		"Mobile",
		"Inovação e Gestão"
	];
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [image, setImage] = useState("");
	const [teamName, setTeamName] = useState(selectOptions[0]);
	const [formWarning, setFormWarning] = useState("");
	const formData = { name, role, image, teamName };
	return (
		<Form formSubmit={(event) => formSubmit(event, props, formData, setFormWarning)} title="Preencha os dados para criar o card do colaborador">
			<Input value={name} setValue={setName} type="text" label="Nome" holder="Digite seu nome" />
			<Input value={role} setValue={setRole} type="text" label="Cargo" holder="Digite seu cargo" />
			<Input value={image} setValue={setImage} type="text" label="Imagem" holder="Digite o link da sua imagem" />
			<Input value={teamName} setValue={setTeamName} type="selection" label="Time" options={selectOptions} />
			<Button color={"#6278f7"}>Criar Card</Button>
			<Button color={"red"}>Deletar Card</Button>
			<Button color={"#828c85"}>Refresh</Button>
			{formWarning !== "" && <Warning warning={formWarning} />}
		</Form>
	)
}

export default CardForm




function formSubmit(event, props, formData, setFormWarning) {
	const newMember = {
		name: formData.name,
		role: formData.role,
		image: formData.image
	}
	const buttonText = event.nativeEvent.submitter.innerHTML;
	event.preventDefault();
	if (buttonText === "Criar Card") {
		createCard(props,newMember,formData, setFormWarning);
	} else if (buttonText === "Deletar Card"){
		delCard(props,newMember, formData.teamName);
	}
	else if(buttonText === "Refresh"){
		props.refresh();
	}
}

function delCard(props, newMember, teamName){
	props.removeMember(newMember, teamName);
}

function createCard(props, newMember, formData,setFormWarning) {
	if (isRepeated(props.teamsList, formData.name)) {
		setFormWarning("Não podem haver cards com nomes repetidos");
		return;
	} else
		setFormWarning("");
	props.addTeamsList(newMember, formData.teamName);
}

function isRepeated(teamsList, name) {
	let repeated = false;
	teamsList.forEach(team => {
		team.members.forEach(member => {
			if (member.name === name)
				repeated = true;
		});
	});
	return repeated;
}


