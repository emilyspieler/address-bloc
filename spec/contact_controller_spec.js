const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

  beforeEach((done) => {
       this.book = new ContactController();

// #1
       sequelize.sync({force: true}).then((res) => {
         done();
       })
       .catch((err) => {
         done();
       });
    });

   describe("#addContact()", () => {

it("should add a single contact into the book", (done) => {
  this.book.addContact("Alice", "001-101-1010", "email@email.com")
   .then((contact) => {

// #3
     expect(contact.name).toBe("Alice");
     expect(contact.phone).toBe("001-101-1010");
     expect(contact.email).toBe("email@email.com")
     done();
   })
   .catch((err) => {
     done();
   });
     });
   });
  })
