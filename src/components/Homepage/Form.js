export default function renderForm() {
  setTimeout(() => {
    // Ensure this runs after the form is rendered
    const locationSelect = document.getElementById("location");
    const startDateField = document.querySelector(".form-date");
    const addressField = document.querySelector(".form-address");
    const dormField = document.querySelector(".form-dorm");
    const rentField = document.querySelector(".form-rent");
    const utilitiesField = document.querySelector(".form-utilities");

    const toggleFields = () => {
      const locationValue = locationSelect.value;

      if (locationValue === "off-campus") {
        startDateField.style.display = "flex";
        addressField.style.display = "flex";
        dormField.style.display = "none";
        rentField.style.display = "flex";
        utilitiesField.style.display = "flex";
      } else if (locationValue === "on-campus") {
        startDateField.style.display = "none";
        addressField.style.display = "none";
        dormField.style.display = "flex";
        rentField.style.display = "none";
        utilitiesField.style.display = "none";
      }
    };

    if (locationSelect) {
      locationSelect.addEventListener("change", toggleFields);
      toggleFields(); // Initialize field visibility
    }

    // Add functionality for "add more" button
    const addMoreButton = document.getElementById("add-more-residents");
    const residentsContainer = document.querySelector(".residents-container");

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
      <input
        type="text"
        id="dorm"
        name="dorm"
        placeholder="ex. Gabelli"
      />
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