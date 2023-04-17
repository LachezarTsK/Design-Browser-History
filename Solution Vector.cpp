
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class BrowserHistory {
    
    vector<string> history;
    int currentIndex = 0;
    int maxForwardIndex = 0;

public:
    explicit BrowserHistory(string homepage) {
        history.push_back(move(homepage));
    }

    void visit(string url) {
        maxForwardIndex = ++currentIndex;
        if (currentIndex < history.size()) {
            history.resize(currentIndex + 1);
            history[currentIndex] = move(url);
        } else {
            history.push_back(move(url));
        }
    }

    string back(int steps) {
        currentIndex = max(currentIndex - steps, 0);
        return history[currentIndex];
    }

    string forward(int steps) {
        currentIndex = min(currentIndex + steps, maxForwardIndex);
        return history[currentIndex];
    }
};
