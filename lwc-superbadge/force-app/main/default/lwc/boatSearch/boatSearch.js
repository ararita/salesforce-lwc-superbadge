import { LightningElement } from "lwc";

// imports
export default class BoatSearch extends LightningElement {
  isLoading = false;

  // Handles loading event
  handleLoading() {}

  // Handles done loading event
  handleDoneLoading() {}

  // Handles search boat event
  // This custom event comes from the form
  searchBoats(event) {
    console.log("event detail boatTypeId", event.detail.boatTypeId);
    // this.template
    //   .querySelector("c-boat-search-results")
    //   .searchBoats(event.detail.boatTypeId);
  }

  createNewBoat() {}
}
