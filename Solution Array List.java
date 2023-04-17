
import java.util.ArrayList;
import java.util.List;

public class BrowserHistory {

    private final List<String> history;
    private int currentIndex;
    private int maxForwardIndex;

    public BrowserHistory(String homepage) {
        history = new ArrayList<>();
        history.add(homepage);
    }

    public void visit(String url) {
        maxForwardIndex = ++currentIndex;
        if (currentIndex < history.size()) {
            history.set(currentIndex, url);
        } else {
            history.add(url);
        }
    }

    public String back(int steps) {
        currentIndex = Math.max(currentIndex - steps, 0);
        return history.get(currentIndex);
    }

    public String forward(int steps) {
        currentIndex = Math.min(currentIndex + steps, maxForwardIndex);
        return history.get(currentIndex);
    }
}
