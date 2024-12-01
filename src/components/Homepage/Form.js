export default function renderForm() {
  setTimeout(() => {
    const locationSelect = document.getElementById("location");
    const dateField = document.querySelector(".form-date");
    const addressField = document.querySelector(".form-address");
    const dormField = document.querySelector(".form-dorm select");
    const rentField = document.querySelector(".form-rent");
    const utilitiesField = document.querySelector(".form-utilities");

    // on-campus off-campus toggle feature for form fields
    const toggleFields = () => {
      const locationValue = locationSelect.value;

      // off-campus categories (show - dates, address, rent, utilities | hide - dorm)
      if (locationValue === "off-campus") {
        dateField.style.display = "flex";
        addressField.style.display = "flex";
        dormField.style.display = "none";
        rentField.style.display = "flex";
        utilitiesField.style.display = "flex";
      }
      // on-campus categories (show - dorm | hide - dates, address, rent, utilities)
      else if (locationValue === "on-campus") {
        dateField.style.display = "none";
        addressField.style.display = "none";
        dormField.style.display = "flex";
        rentField.style.display = "none";
        utilitiesField.style.display = "none";
      }
    };

    // call toggleField when location changes between on-campus and off-campus
    if (locationSelect) {
      locationSelect.addEventListener("change", toggleFields);
      toggleFields();
    }

    // adding more current resident (pre-existing group) feature
    const addMoreButton = document.getElementById("add-more-residents");
    const residentsContainer = document.querySelector(".residents-container");

    // add a pair of resident name and academic year input fields when "add more" is clicked
    addMoreButton.addEventListener("click", () => {
      const newResidentRow = document.createElement("div");
      newResidentRow.className = "resident-row";

      newResidentRow.innerHTML = `
        <input
          type="text"
          name="resident-name"
          placeholder="Resident Name"
        />
        <select name="resident-year">
          <option value="freshman">Freshman</option>
          <option value="sophomore">Sophomore</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
      `;

      residentsContainer.appendChild(newResidentRow);
    });

    // create mock database for new input values
    const form = document.querySelector(".post-form");
    const mockDatabase = {
      oncampus: [],
      offcampus: []
    };

    // exception usage of global variable for demonstration purpose
    window.mockDatabase = mockDatabase;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const location = locationSelect.value;
      const residents = Array.from(
        document.querySelectorAll(".resident-row")
      ).map((row) => ({
        name: row.querySelector('[name="resident-name"]').value,
        academicYear: row.querySelector('[name="resident-year"]').value
      }));

      // images are replaced with placeholders (would lead to appropriate path with actual backend)
      const numSeek = parseInt(document.getElementById("looking-for").value);
      const image = {
        src: "actual/image/link.jpg",
        alt: "actual image name"
      };

      // parse data appropriately based on location (on-campus vs. off-campus)
      if (location === "on-campus") {
        const dorm = dormField.value;
        const newEntry = {
          numGroup: residents.length,
          numSeek,
          aim: `${residents.length + numSeek}-man housing`,
          dorm,
          image,
          members: residents
        };
        mockDatabase.oncampus.push(newEntry);
      } else {
        const address = addressField.querySelector("input").value;
        const rent = parseFloat(rentField.querySelector("input").value);
        const utilities = utilitiesField.querySelector("select").value;
        const period = {
          start: {
            month: parseInt(
              new Date(document.getElementById("start-date").value).getMonth() +
                1
            ),
            day: parseInt(
              new Date(document.getElementById("start-date").value).getDate()
            ),
            year: parseInt(
              new Date(document.getElementById("start-date").value).getFullYear()
            )
          },
          end: {
            month: parseInt(
              new Date(document.getElementById("end-date").value).getMonth() +
                1
            ),
            day: parseInt(
              new Date(document.getElementById("end-date").value).getDate()
            ),
            year: parseInt(
              new Date(document.getElementById("end-date").value).getFullYear()
            )
          }
        };

        // format input values in appropriate style
        const newEntry = {
          numGroup: residents.length,
          numSeek,
          rent,
          utilities,
          period,
          address,
          image,
          members: residents
        };
        mockDatabase.offcampus.push(newEntry);
      }

      console.log("Database Successfully Updated: ", mockDatabase); // For testing
    });
  }, 0);

  return `
<div class="container">
  <h2 class="section-title">
    <span class="keyword">Post</span> Your Own Listing
  </h2>
  <form class="post-form">
    <div class="form-location">
      <label for="location">Location:</label>
      <select id="location" name="location">
        <option value="off-campus">Off-Campus</option>
        <option value="on-campus">On-Campus</option>
      </select>
    </div>

    <div class="form-name">
      <label for="name">Current Group Members:</label>
      <div class="residents-container">
        <div class="resident-row">
          <input
            type="text"
            name="resident-name"
            placeholder="Resident Name"
          />
          <select name="resident-year">
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </div>
      <button type="button" id="add-more-residents">Add More</button>
    </div>

    <div class="form-looking-for">
      <label for="looking-for">Looking for:</label>
      <input
        type="number"
        id="looking-for"
        name="looking-for"
        min="1"
        placeholder="ex. 8"
      />
    </div>

    <div class="form-date">
      <label for="start-date">Start Date:</label>
      <input
        type="date"
        id="start-date"
        name="start-date"
      />

      <label for="end-date">End Date:</label>
      <input
        type="date"
        id="end-date"
        name="end-date"
      />
    </div>

    <div class="form-gender">
      <label for="gender">Gender:</label>
      <select id="gender" name="gender">
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div class="form-dorm">
      <label for="dorm">Preferred-Dorm:</label>
      <select id="dorm" name="dorm">
        <option value="Gabelli">Gabelli</option>
        <option value="Ignacio">Ignacio</option>
        <option value="Modulars">Modulars</option>
        <option value="Ninety St. Thomas More">Ninety St. Thomas More</option>
        <option value="Reservoir">Reservoir</option>
        <option value="Rubenstein">Rubenstein</option>
        <option value="Stayer">Stayer</option>
        <option value="Thomas More">Thomas More</option>
        <option value="Vanderslice">Vanderslice</option>
        <option value="Voute">Voute</option>
        <option value="Walsh">Walsh</option>
      </select>
    </div>

    <div class="form-address">
      <label for="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="ex. 140 Commonwealth Ave, Chestnut Hill, MA 02467"
      />
    </div>

    <div class="form-rent">
      <label for="rent">Monthly Rent:</label>
      <input
        type="number"
        id="rent"
        name="rent"
        placeholder="ex. 1500"
      />
    </div>

    <div class="form-utilities">
      <label for="utilities">Utilities:</label>
      <select id="utilities" name="utilities">
        <option value="included">Included</option>
        <option value="not-included">Not Included</option>
      </select>
    </div>

    <div class="form-image">
      <label for="upload-images">Upload Images:</label>
      <input
        type="file"
        id="upload-images"
        name="upload-images"
        multiple
      />
    </div>

    <div>
      <button type="submit" class="submit-button">Submit</button>
    </div>
  </form>
</div>
  `;
}