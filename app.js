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
