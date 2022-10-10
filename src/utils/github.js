const User = 'hvaftrudner';

const GithubUser = {

    //gets user repo and converts to json https://api.github.com/users/USERNAME/repos
    getUserRepo(){
        return fetch(`https://api.github.com/users/${User}/repos?page=1&per_page=100`, {
            method: 'GET',
            body: JSON.stringify(),
            success: function(res){
                console.log(res)
            }
        }).then(
            response => {
                if (response.ok){
                    console.log('Success');
                    return response.json();
                } else {
                    console.log('API request failed');
                }
            }
        ).then(
            //check if jsonresponse work
            jsonResponse => {
                if(!jsonResponse[0].name){
                    console.log('Json request failed!');
                } else {
                    console.log('Json request succeded')
                    //jsonresponse first object name to console in devtools
                    console.log(jsonResponse[0].name)
                
                }
                //Jsonrespone sends everything, first starts at 0,1,2-
                //it cant identify the different subtopics
                //removing avatar_url gets the repo fetch to work.

                
                return jsonResponse.map(repo =>({
                    id: repo.id,
                    name: repo.name,
                    html_url: repo.html_url,
                    description: repo.description,
                    avatar: repo.avatar_url,
                    
                }));
            }
        )
    },

}


export default GithubUser;
