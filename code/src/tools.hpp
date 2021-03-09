#ifndef __TOOLS_H_
#define __TOOLS_H_
#include <string>
#include <vector>
#include <iostream>
/**
 * @file tools.cpp*/

/**
 * @class Debug
 * @brief Classe permettant d'afficher le debug de toutes les autres classes*/
class Debug {
  public :
  const virtual void printDebug()=0;/*!< Fonction virtuelle permettant d'obtenir une méthode printDebug dans toutes les classes filles */
};


/**
 * @class Position*/
class Position{
  public :
    int x;
    int y;
};

enum Side{BLUE, YELLOW};

void printVectorPosition(std::vector<Position>);

#endif // __TOOLS_H_
