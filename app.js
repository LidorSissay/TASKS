<<<<<<< HEAD
//1
const getData = async url => fetch(url).then(response => response.json())
const getToDoStats = async () => {
    try {
        const toDos = await getData('https://jsonplaceholder.typicode.com/todos')
        const toDosStatus = toDos
            .reduce((acc, { completed }) => {
                if (completed) {
                    acc['done'] += 1
                } else {
                    acc.pending += 1
                }
                return acc
            }, { done: 0, pending: 0 })

        document.getElementById('done').innerHTML = `
                <h2 style="color: green;">Completed todos: ${toDosStatus.done}</h2>
        `
        document.getElementById('pending').innerHTML = `
            <h2 style="color: red;">Pending todos: ${toDosStatus.pending}</h2>
        `
    } catch (error) { console.log(error) }
}
getToDoStats()
=======
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
>>>>>>> aeb2a89981cbba40a32b05ce79f8645d01a6267a
