function get(url){
    // Step 1: fetch the data
    return fetch(url)
    .then(function(response){//Step 2: Run the json method from response
        return response.json();
    })
    .then(function(data){// Step 3: Return data from the response json method
        return data;
    })
}