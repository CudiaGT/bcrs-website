

export default function renderForm() {
    return `
    <div class="container">
        <!-- Use form so we can later implement form handler -->
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
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="ex. John Doe, Jane Doe, ..."
            ></textarea>
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
            <label for="date-range">Date:</label>
            <input
              type="text"
              id="date-range"
              name="date-range"
              placeholder="ex. Jun 28th, 2025 ~ Aug 1st, 2025"
            />
            <button type="button" class="calendar-button">📅</button>
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

          <div class="form-additional">
            <label for="notes">Additional Information:</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="Additional Information"
            ></textarea>
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