const { Student } = require('../model/student.model')

const getStudent = async () => {

    const student = Student.find()
        .then(result => {
            console.log(result)

            return result;
        })
        .catch(err => err)
    return student;
}


const addStudent = async ({
    firstname,
    lastname,
    branch
}) => {

    const newStudent = new Student({
        firstname,
        lastname,
        branch
    })

  const student = newStudent.save()
        .then(result => {
            console.log(result);
            return result
        })
        .catch(err => err);

        return student;
}


const deleteStudent = async (id) => {

    const student = Student.deleteOne({ _id: id })
        .then(result => result)
        .catch(err => err)


    return student;
}


module.exports = {
    addStudent,
    getStudent,
    deleteStudent
}