let posts = $.ajax({ url: 'https://jsonplaceholder.typicode.com/posts' }).promise();

posts.then((data) => data.forEach((element) => {
    console.log(element.title)
})).catch((err) => { throw err });