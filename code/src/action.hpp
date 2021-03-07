#ifndef __ACTION_H_
#define __ACTION_H_
#include "tools.hpp"

/**
 * @file action.hpp*/

/**
 * @class Action
 * @brief Permet de définir un actionneur*/
class Action: public Debug{
    private :
        const std::string _name; /*!< Nom de l'actionneur */
        int _state; /*!< État de l'actionneur (0 désactivé, 1 activé)*/
    public :
        Action(const std::string); /*!< Constructeur avec un nom (état à 0 par défaut)*/
        ~Action();
        void changeState(); /*!< Réalise les actions pour changer l'état de l'actionneur */
        const void printDebug();
};


#endif // __ACTION_H_
