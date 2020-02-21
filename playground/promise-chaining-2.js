require('../src/db/mongoose')
const Task = require('../src/models/task');


// Task.findByIdAndDelete('5e4bdb9c884b9104e496a40b').then(result => {
//     console.log(result)
//     return Task.countDocuments({
//         completed : false
//     })
// }).then((count) => {
//     console.log('in this')
//     console.log(count)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false});
    return count;
}


deleteTaskAndCount('5e4e329b8bab937e2f3c8921')
        .then(count => console.log(count))
        .catch(e => console.log(e))

console.log('this will be printing before async function');