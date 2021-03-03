#ifndef __ACTION_H_
#define __ACTION_H_
#include "debug.cpp"
class Action: public Debug{
    private :
        int _state;
    public :
        Action();
        ~Action();
        void changeState();
        void printDebug();
};


#endif // __ACTION_H_
