import { renderNavBar, toggleMenu } from "./navbar.js";
import { renderFooter } from "./footer.js";

export function renderSignInPage() {
  const body = document.querySelector("body");
  const signin = document.createElement("section");
  signin.classList = "signin-container";
  signin.innerHTML = SignInPageConstructor();
  body.append(signin);
  const header = document.createElement("header");
  header.innerHTML = renderNavBar();
  body.prepend(header);
  const footer = document.createElement("footer");
  footer.innerHTML = renderFooter();
  body.append(footer);
}

window.SignInPageConstructor = SignInPageConstructor;

export function SignInPageConstructor() {
  return `
          <div class="signinDiv">
            <h1>Sign In</h1>
            <form action="/signin" method="POST">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Sign In</button>
            </form>
            <a href="?page=signup">Don't have an account? Sign Up</a>
            <a href="/forgot-password">Forgot your password?</a>
          </div>
   `;
}
