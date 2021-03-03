#include <string>
#include <vector>

class Debug {
private:
    const bool _debug;
  public:
    Debug(bool);
    ~Debug();
  void debugable() {
    if (_debug == true)
      this->printDebug();
  }
  const virtual void printDebug() = 0;
};

class Position{
  public :
    int x;
    int y;
};

enum Side{BLUE, YELLOW};
