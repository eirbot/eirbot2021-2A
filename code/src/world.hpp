#ifndef __WORLD_H_
#define __WORLD_H_
#include "tools.cpp"

class World : public Debug{
    private :
        const int _width;
        const int _length;
        std::vector<Position> obstacle;
        const enum Side _side;
    public :
        World();
        World(int width, int length, std::vector<Position>, enum Side);
        ~World();
        const int getWidth();
        const int getLength();
        const int getSide();
        const void printDebug();

};


#endif // __WORLD_H_
