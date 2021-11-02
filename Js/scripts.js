
function fetchData() {
  var display = document.getElementById("Followers");
  display.classList.remove("Hidden");

  fetch("https://reqres.in/api/users?page=2")
    .then(response => {
      if (!response.ok){
        throw Error("Error");
      }
      return response.json();
    })
    .then(data => {
      const html = data.data.slice(0, 5)
        .map(user => {
          return `
          <div class="UserResult">
            <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
            <h4>${user.first_name} ${user.last_name}</h4>
            <p class="UserEmailHeading">Email:</p><p class="UserEmail"> ${user.email}</p>
            </div>`;
        })
        .join("");
      document.querySelector("#SearchResults").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
      console.log(error);
    });
}

function hideFollowers(){

  var hide = document.getElementById("Followers");
  hide.classList.add("Hidden");

}
