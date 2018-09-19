function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'db4c49a6cb9b60d78c91ac0f7963b8a517e81bbd';
 
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
