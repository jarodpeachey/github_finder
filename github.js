class GitHub {
   constructor() {
      this.client_id = '25a34a89c1a580d4d787';
      this.client_secret = 'd6eb6367e9930c910f9b161721c4b81397492eea';
      this.repos_count = 5;
      this.repos_sort = "created: asc";
   }

   async getUser(user) {  
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profileData = await profileResponse.json();
      const repoData = await repoResponse.json();

      return {
         profile: profileData,
         repo: repoData
      }
   }
}
