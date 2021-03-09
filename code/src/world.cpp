#include "world.hpp"

World::World():_width(200),_length(300),_obstacle(),_side(BLUE){}
World::World(int width, int length, std::vector<Position> position, enum Side side):_width(width),_length(length),_obstacle(position),_side(side){
}

World::~World(){}

const void World::printDebug(){
    std::cout << "\033[33mDébug de la classe World : \033[0m" << std::endl;
    std::cout << "\t Largueur de la table \t" << this->getWidth() << std::endl;
    std::cout << "\t Longueur de la table \t" << this->getLength() << std::endl;
    std::cout << "\t Côté de la table \t \t" << this->getSide() << std::endl;
    std::cout << "\t Liste des obstacles  \t";
    printVectorPosition(_obstacle);
 }

const int World::getWidth(){
    return this->_width;
}

const int World::getLength(){
    return this->_length;
}

const int World::getSide(){
    return this->_side;
}
