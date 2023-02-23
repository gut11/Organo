function Database() {
  const url = "http://localhost:8080/";
  return {
    saveUser: (newUser, teamName) => {
      return fetch(url + "saveUser", {
        method: "POST",
		headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ member : newUser, teamName }),
      });
    },
    getUsers: () => {
      return fetch(url + "getUsers");
    },
    removeUser: (member,teamName) => {
      return fetch(url + "delUser", {
        method: "DELETE",
		headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ member, teamName }),
      });
    },
  };
}

export default Database();
