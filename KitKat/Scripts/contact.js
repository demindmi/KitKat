function submitCalled(e) {
  e.preventDefault();
  console.log(event.target.username.value);
  alert(
    `Username: ${event.target.username.value} 
   | Gender: ${event.target.gender.value} 
   | Flavour: ${event.target.ice.value}`
  );
}
