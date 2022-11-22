const request =require("supertest");
const app = require("./routes/User");
const mongoose=require("mongoose");

describe("test root path",()=>{
test("it should response post method ",()=>{
    const response=request(app).post("http://localhost:8000/User/add").send({
        "Name":"Obaid",
        "Email":"obaid",
        "Age":12,
        "Contact":123
    })

    expect(response.statuscode).toBe(200);
})
})



describe("Test Delete ",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("http://localhost:8000/Users/delete"
        ).send({
            "Name":"Abdullah",
            "Email": "2020",
            "Age":20,
            "Contact":200        })
        expect(response.statusCode).toBe(200);
    })
})




describe("Test the Add path 2",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("http://localhost:8000/Users/add"
        ).send({
            "Name":"Abdullah",
        })
        expect(response.statusCode).toBe(200);
    })
})
