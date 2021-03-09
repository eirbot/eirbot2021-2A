#ifndef __WORLD_H_
#define __WORLD_H_
#include "tools.hpp"

/**
 * @file world.cpp
 * @brief Modélisation de la table de jeu*/
class World : public Debug{
    private :
        const int _width; /*!< Largeur de la table */
        const int _length; /*!< Longueur de la table */
        std::vector<Position> _obstacle; /*!< Liste des obstacles critiques */
        const enum Side _side;/*!< Côté de la table */
    public :
        World();
        World(int width, int length, std::vector<Position>, enum Side);
        ~World();
        const int getWidth(); /*!< Renvoie la largueur de la table */
        const int getLength(); /*!< Renvoie la longueur de la table */
        const int getSide(); /*!< Renvoie le côté de la table */
        const virtual void printDebug();

};


#endif // __WORLD_H_
