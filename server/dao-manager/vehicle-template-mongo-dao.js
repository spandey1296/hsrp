const vehicleDto = require("../communication/models/vehicle_templates");
const MongoDao = require("./mongo-dao");

class vehicleTemplateDto extends MongoDao {
  constructor() {
    super(vehicleDto);
  }
}

module.exports = new vehicleTemplateDto();
