
public class BrowserHistory {

    Website<String> currentWebsite;

    public BrowserHistory(String homepage) {
        currentWebsite = new Website(homepage);
    }

    public void visit(String url) {
        Website<String> newWebsite = new Website(url);
        currentWebsite.forward = newWebsite;
        newWebsite.backward = currentWebsite;
        currentWebsite = newWebsite;
    }

    public String back(int steps) {
        while (steps-- > 0 && currentWebsite.backward != null) {
            currentWebsite = currentWebsite.backward;
        }
        return currentWebsite.address;
    }

    public String forward(int steps) {
        while (steps-- > 0 && currentWebsite.forward != null) {
            currentWebsite = currentWebsite.forward;
        }
        return currentWebsite.address;
    }
}

class Website<T> {

    Website<T> forward;
    Website<T> backward;
    T address;

    Website(T address) {
        this.address = address;
    }
}
