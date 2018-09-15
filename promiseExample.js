console.log("Before");
const user = getUser(1);

user
  .then(user => {
    return getRepositories(user.githubUsername);
  })
  .then(repos => {
    return getCommits(repo[0]);
  })
  .then(commits => {
    console.log(commits);
  })
  .catch(err => {
    console.log(err);
  });

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a db");
      resolve({ id: id, githubUsername: "kh" });
    }, 2000);
  });
}

function getRepositories(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Reading Repo of user ${userName}`);
      repo = [{ id: 1, name: `repo1` }, { id: 2, name: `repo2` }];
      resolve(repo[0]);
    }, 1000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting commit of ${repo.name}`);
      let commits = ["commit1", "commit2", "commit3"];
      resolve(commits);
    }, 1000);
  });
}

console.log("After");
