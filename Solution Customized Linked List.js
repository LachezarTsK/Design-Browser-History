
class BrowserHistory {

    /**
     * @param {string} homepage
     */
    constructor(homepage) {
        this.currentWebsite = new Website(homepage);
    }

    /** 
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let newWebsite = new Website(url);
        this.currentWebsite.forward = newWebsite;
        newWebsite.backward = this.currentWebsite;
        this.currentWebsite = newWebsite;
    }

    /** 
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps-- > 0 && this.currentWebsite.backward !== null) {
            this.currentWebsite = this.currentWebsite.backward;
        }
        return this.currentWebsite.address;
    }

    /** 
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps-- > 0 && this.currentWebsite.forward !== null) {
            this.currentWebsite = this.currentWebsite.forward;
        }
        return this.currentWebsite.address;
    }
}

class Website {

    /**
     * @param {string} address
     */
    constructor(address) {
        this.forward = null;
        this.backward = null;
        this.address = address;
    }
}
