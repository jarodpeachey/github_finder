const github = new GitHub;

const ui = new UI;

const search = document.getElementById('searchUser');

search.addEventListener('keyup', (e) => {
   const inputText = e.target.value;

   if (inputText !== '') {
      github.getUser(inputText)
         .then(data => {
            if(data.profile.message === 'Not Found') {
               ui.clearProfile();
               ui.showAlert(`${inputText} is not a valid user.  Please enter a new username`, 'alert alert-danger user-alert');
            } else {
               // Show profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repo);
            }
         })
   } else {
      ui.clearProfile();
   }
});
