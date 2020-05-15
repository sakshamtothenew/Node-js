const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')

const { Student } = require('../server/model/student.model')

const server = require('../server/server')
let should = chai.should();


chai.use(chaiHttp);


describe('Students' , () => {

    beforeEach((done) => {
        Student.remove({} , (err)=> {
            done();
        })
    })

    describe('Get students' , () => {

      it("should return all users with acccess to delete them" , (done) => {
                    chai.request(server) 
                    .get('/student')
                    .end((err , res) => {
                        res.body.should.be.a('array')
                        done();
                    })
        })
    })

    describe('save students' , () => {
        it("should save students in database" , (done) => {
            let student = {
                firstname : "sakshaam" , 
                lastname : "sachdeva" , 
                branch : "CSE"
            }
            chai.request(server)
            .post('/student')
            .send(student)
            .end((err , res)=> {
                res.should.be.a('object')
                res.body.should.have.property('firstname');
                res.body.should.have.property('lastname');
                res.body.should.have.property('branch');
                done();
            })
        })
    })

    describe("delete students" , () => {
        it("should delete  given " , (done) => {
            let student = new Student({firstname : "saksham" , lastname : "sachdeva" , branch : "CSE"})
            student.save((err , student) => {
                chai.request(server)
                .delete('/student/' + student._id)
                .end((err , res)=> {
                    res.body.should.be.a("object")
                    res.body.should.have.property('ok').eq(1)
                    done()
                })
            })

        })
    })
})