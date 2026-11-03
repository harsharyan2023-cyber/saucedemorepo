export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.usenameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.pagesubmit = page.locator('[id="login-button"]');
    }

    async enterUsername() {
        await this.usenameInput.fill('standard_user');
    }
    async enterPassword() {
        await this.passwordInput.fill('secret_sauce');
    }
    async clicklogin() {
        await this.pagesubmit.click();
    }    
}