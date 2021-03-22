(function getData(){
fetch("https://gitlab.com/api/v4/users/deepakbadu/projects")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not reach website.");
    }
    return response.json();
  })
  .then(data =>{
    const html = data.map(projects => {
      return `
        <tr>
          <td> ${projects.id}</td>
          <td>${projects.name}</td>
          <td> <a href= ${projects.web_url}> ${projects.web_url} </a></td>
        </tr>`
    }).join("")
    document
    .querySelector("#app")
    .insertAdjacentHTML('afterbegin', html) 
  })
  .catch(err => {
    return err
  });
})();