#ifndef __ACTION_H_
#define __ACTION_H_
#include "tools.cpp"

class Action: public Debug{
    private :
        const std::string _name;
        int _state;
    public :
        Action(const std::string);
        ~Action();
        void changeState();
        void printDebug();
};


#endif // __ACTION_H_
