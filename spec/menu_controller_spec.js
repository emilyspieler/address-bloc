const MenuController = require("../controllers/MenuController");

 describe("MenuController", () => {
   beforeEach(() => {
      this.menu = new MenuController();
    });
   describe("#remindMe()", () => {
     it("should return Learning is a lifelong persuit", () => {
       expect(this.menu.remindMe());
   });
  });
});
