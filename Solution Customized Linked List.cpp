
#include <memory>
#include <string>
using namespace std;

template<typename T> struct Website {
    shared_ptr<Website<T>> forward;
    shared_ptr<Website<T>> backward;
    T address;
    
    explicit Website(T address) : address{move(address)}{}
};

class BrowserHistory {
    
    shared_ptr<Website<string>> currentWebsite;

public:
    explicit BrowserHistory(string homepage): currentWebsite {make_shared<Website<string>>(move(homepage))}{}

    void visit(string url) {
        auto newWebsite = make_shared<Website<string>>(move(url));
        currentWebsite->forward = newWebsite;
        newWebsite->backward = currentWebsite;
        currentWebsite = newWebsite;
    }

    string back(int steps) {
        while (steps-- > 0 && currentWebsite->backward != nullptr) {
            currentWebsite = currentWebsite->backward;
        }
        return currentWebsite->address;
    }

    string forward(int steps) {
        while (steps-- > 0 && currentWebsite->forward != nullptr) {
            currentWebsite = currentWebsite->forward;
        }
        return currentWebsite->address;
    }
};
