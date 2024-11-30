import { renderOnCampusForm, renderOffCampusForm } from "./SearchForm.js";

export default function SearchBar(listingLocation) {
  return `
  <section class="splash">
          <div class="searchBar wrapper">
            <div class="formWrapper">
              <form
                method="post"
                action="http://www.randyconnolly.com/tests/process.php"
                class = "search"
              >
                <fieldset>
                  <div class="label-select">
                    <label class="label">Listing Location</label>
                    <select
                      name="Listing Location:"
                      placeholder="Enter Desired Location"
                      id="listing-location"
                      class="select"
                    >
                      <optgroup class="options-group">
                        <option value="">Select One</option>
                        <option value="oncampus">oncampus</option>
                        <option value="offcampus">offcampus</option>
                      </optgroup>
                    </select>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
        `;
}
