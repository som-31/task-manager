require('../src/db/mongoose');
const User = require('../src/models/user');

// 5e4bdf5a4f8fb406cadcd5d7

// User.findByIdAndUpdate('5e4bdf5a4f8fb406cadcd5d7', {
//     age : 24
// }).then( user => {
//     console.log(user)
//     return User.countDocuments({
//         age : 24
//     })
// }).then(count => {
//     console.log(count)
// }).catch(e => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count ;
}

updateAgeAndCount('5e4be15e8073e20899591331', 2).then( count => {
    console.log(count)
}).catch(e => console.log(e))