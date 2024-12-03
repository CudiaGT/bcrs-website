export function renderOnCampusForm() {
    return `
    <form
                  method="post"
                  action=""
                  class = "search field"
                >
                  <fieldset>
                    <div class="label-select">
                      <label class="label">Class Year:</label>
                      <select
                        name="Class Year:"
                        placeholder="Enter Year"
                        id="class-year"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value=2025>2025</option>
                          <option value=2026>2026</option>
                          <option value=2027>2027</option>
                          <option value=2028>2028</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="label-select">
                      <label class="label">Size of Group:</label>
                      <select
                        name="Size of Group:"
                        placeholder="Enter Group Size"
                        id="size-of-group"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value=1>1</option>
                          <option value=2>2</option>
                          <option value=3>3</option>
                          <option value=4>4</option>
                          <option value=5>5</option>
                          <option value=6>6</option>
                          <option value=7>7</option>
                          <option value=8>8</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="label-select">
                      <label class="label">Desired Number of Roomates:</label>
                      <select
                        name="Desired Number of Roomates:"
                        placeholder="Enter Number of Roomates You're Looking For"
                        id="desired-number-of-roommates"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value=1>1</option>
                          <option value=2>2</option>
                          <option value=3>3</option>
                          <option value=4>4</option>
                          <option value=5>5</option>
                          <option value=6>6</option>
                          <option value=7>7</option>
                          <option value=8>8</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="label-select">
                      <label class="label">Preferred Dorm:</label>
                      <select
                        name="Preferred Dorm:"
                        placeholder="Enter Preferred Dorm"
                        id="preferred-dorm"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value="Ninety St. Thomas More">Ninety St. Thomas More</option>
                          <option value="Vanderslice Hall">Vanderslice Hall</option>
                          <option value="Walsh Hall">Walsh Hall</option>
                          <option value="Thomas More Apartments">Thomas More Apartments</option>
                          <option value="Stayer Hall">Stayer Hall</option>
                          <option value="Gabelli Hall">Gabelli Hall</option>
                          <option value="Voute Hall">Voute Hall</option>
                          <option value="Rubenstein Hall">Rubenstein Hall</option>
                          <option value="Ignacio Hall">Ignacio Hall</option>
                          <option value="66">66 Hall</option>
                          <option value="Roncalli Hall">Roncalli Hall</option>
                          <option value="Welch Hall">Welch Hall</option>
                        </optgroup>
                      </select>
                    </div>
                      <button type ="submit"  class="search">
                        <img
                          src="https://cdn.glitch.global/da9cfe19-f6cb-435e-ae30-d04e66913eee/MagnifyingGlass.png?v=1732079795736"
                          alt="magnifying glass"
                        />
                        <p>Search</p>
                      </button>
                  </fieldset>
                </form>`;
}


export function renderOffCampusForm() {
    return `
    <form
                  method="post"
                  action="http://www.randyconnolly.com/tests/process.php"
                  class = "search field"
                >
                  <fieldset>
                    <div class="label-select">
                      <label class="label">Class Year:</label>
                      <select
                        name="Class Year:"
                        placeholder="Enter Year"
                        id="class-year"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value=2025>2025</option>
                          <option value=2026>2026</option>
                          <option value=2027>2027</option>
                          <option value=2028>2028</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="label-select">
                      <label class="label">Size of Group:</label>
                      <select
                        name="Size of Group:"
                        placeholder="Enter Group Size"
                        id="size-of-group"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value=1>1</option>
                          <option value=2>2</option>
                          <option value=3>3</option>
                          <option value=4>4</option>
                          <option value=5>5</option>
                          <option value=6>6</option>
                          <option value=7>7</option>
                          <option value=8>8</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="label-select">
                      <label class="label">Desired Number of Roomates:</label>
                      <select
                        name="Desired Number of Roomates:"
                        placeholder="Enter Number of Roomates You're Looking For"
                        id="desired-number-of-roommates"
                        class="select"
                      >
                        <optgroup class="options-group">
                          <option value="">Select One</option>
                          <option value=1>1</option>
                          <option value=2>2</option>
                          <option value=3>3</option>
                          <option value=4>4</option>
                          <option value=5>5</option>
                          <option value=6>6</option>
                          <option value=7>7</option>
                          <option value=8>8</option>
                        </optgroup>
                      </select>
                    </div>
                      <button type ="submit"  class="search">
                        <img
                          src="https://cdn.glitch.global/da9cfe19-f6cb-435e-ae30-d04e66913eee/MagnifyingGlass.png?v=1732079795736"
                          alt="magnifying glass"
                        />
                        <p>Search</p>
                      </button>
                  </fieldset>
                </form>`;
}
