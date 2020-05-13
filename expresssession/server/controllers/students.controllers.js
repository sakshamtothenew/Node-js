const { addStudent, getStudent , deleteStudent} = require('../services/students.service')


 const addStudents = async (req, res) => {

    const data = await addStudent(req.body)
    res.send(data);
}

 const getStudents = async (req, res) => {
    const data = await getStudent();
      if(!data)
      {
          res.send([])
      }
    else {
        res.send(data)
    }
    
}

 const deleteStudents = async (req , res) => {

    const data = await deleteStudent(req.params.id)
    res.send(data);
    
}

module.exports = {

    addStudents , 
    getStudents , 
    deleteStudents
}