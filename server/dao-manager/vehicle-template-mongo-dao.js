const vehicleTemplateInfos = require("../communication/models/vehicle_templates");
const MongoDao = require("./mongo-dao");

class vehicleTemplateInfos extends MongoDao {
  constructor() {
    super(vehicleTemplateInfos);
  }
}

module.exports = new vehicleTemplateInfos();
