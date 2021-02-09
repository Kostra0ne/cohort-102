class House {
  constructor(infos) {
    // constructor is the plan, the blue print for the returned objects
    this.squareMetters = infos.squareMetters;
    this.levels = infos.levels;
    this.rooms = infos.rooms;
    this.bathrooms = infos.bathrooms;
    this.hasGarden = infos.hasGarden;
    this.agencyFees = infos.agencyFees;
  }

  howAreTheAgencyFee() {
    let msg;
    if (this.agencyFees < 500) msg = "it's not expensive";
    else msg = "it's a lot of money";
    return msg;
  }
}

class TinyHouse extends House {
  constructor(infos) {
    // constructor is the plan, the blue print for the returned objects
    super(infos);
    this.rooms = 1;
    this.bathrooms = 1;
    this.hasGarden = true;
  }

  contemplateGarden() {
    return "zen, this landscape is beautifull";
  }
}

const tiny = new TinyHouse({
  squareMetters: 50,
  levels: 1,
  agencyFees: 400,
});

console.log(tiny);
console.log( tiny.contemplateGarden() );
console.log( tiny.howAreTheAgencyFee() );
console.log("**********");

const houseInfos = {
  squareMetters: 200,
  levels: 2,
  rooms: 3,
  bathrooms: 2,
  hasGarden: true,
  agencyFees: 499,
};

const lilHouse = new House(houseInfos);

const bigHouse = new House({
  squareMetters: 2000,
  levels: 20,
  rooms: 30,
  bathrooms: 10,
  hasGarden: true,
  agencyFees: 100000,
});

console.log(lilHouse.howAreTheAgencyFee());
console.log("------");
console.log(bigHouse.howAreTheAgencyFee());
