#ifndef __TOOLS_H_
#define __TOOLS_H_
#include <string>
#include <vector>

/**
 * @file tools.cpp*/

/**
 * @class Debug
 * @brief Classe permettant d'afficher le debug de toutes les autres classes*/
class Debug {
private:
    const bool _debug;/*!< Permet de définir si le debug est activé */
  public:
    Debug(bool);/*!< Instancie la classe Debug, si bool vaut true alors le debug est activé*/
    ~Debug();

  /**
   * @brief Appel printDebug si debug vaut true*/
  void debugable();
  const virtual void printDebug() = 0;/*!< Fonction virtuelle pure permettant d'obtenir une méthode printDebug dans toutes les classes filles */
};

/**
 * @class Position*/
class Position{
  public :
    int x;
    int y;
};

enum Side{BLUE, YELLOW};


#endif // __TOOLS_H_
