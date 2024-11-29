//import {renderOffCampusButton, renderOnCampusButton} from "./Buttons.js"
    
    
export default function Splash() {
    return `       
    <div id="gassonHall" class="image" aria-label="Image of Gasson Hall">
        <img
            src="https://cdn.glitch.global/da9cfe19-f6cb-435e-ae30-d04e66913eee/gassonHall.jpg?v=1731984555342"
            alt="Image of Gasson Hall"
        />
        <div class="buttons">
            <button onclick = "document.location='#on-campus'" class="on-campus location">
                <img
                src="https://cdn.glitch.global/da9cfe19-f6cb-435e-ae30-d04e66913eee/Vector.png?v=1731997394045"
                alt="lodging clipart"
                />
                <p>On-Campus</p>
            </button>
            <button onclick = "document.location='#off-campus'" class="off-campus location">
                <img
                src="https://cdn.glitch.global/da9cfe19-f6cb-435e-ae30-d04e66913eee/VectorWhite.png?v=1732117853774"
                alt="lodging clipart"
                />
                <p>Off-Campus</p>
            </button>
        </div>
    </div>`;
}