//quiz-1
const getData = async url => fetch(url).then(response => response.json());
const postCom = async () => {
    try {
        const comments = await getData('https://jsonplaceholder.typicode.com/comments')
        const filteredPosts = comments
            .filter(({ postId }) => +postId === 3)
        const bodyLng = filteredPosts
            .reduce((total, { body }) => {
                total += body.length
                return total
            }, 0)
        const average = bodyLng / filteredPosts.length
        document.getElementById('sum').innerHTML = `
            The average length of comments in post 3 is ${average} chars.
        `
    } catch (error) { console.log(error) }
}
postCom()
//End of Quiz 1