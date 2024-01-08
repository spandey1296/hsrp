const contactDto = require("../communication/models/contact-us");
const MongoDao = require("./mongo-dao");

class contactTemplateDto extends MongoDao {
  constructor() {
    super(contactDto);
  }
}

module.exports = new contactTemplateDto();
