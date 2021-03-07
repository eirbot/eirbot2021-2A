#ifndef __PROCESSING_H_
#define __PROCESSING_H_
#include "world.hpp"
#include <time.h>
#include "action.hpp"
#include "sensors.hpp"
/**
 * @file processing.hpp*/

/**
 * @class Control
 * @brief Classe permettant de relier la stratégie et l'Asservissement*/
class Control : public Debug {
private:
  Position _position; /*!< Position courante du robot */
  float _angle;       /*!< Angle courant du robot */
  float _speed;       /*!< Vitesse actuelle du robot (facultatif) */
public:
  Control();
  ~Control();

/**
 * @brief Permet de se déplacer relativement
 * @param dx est le déplacement relatif en x
 * @param dy est le déplacement relatif en y
 * @param alpha est optionnel, permet de spécifier l'angle absolu du robot à la fin du déplacement*/
  void setPositionRelative(int dx, int dy, int alpha);
  void setAngle(int alpha);/*!< Permet de faire une rotation du robot, alpha est absolu */
  Position getPosition();/*!< Renvoie la position courante du Robot */
  int getAngle();/*!< Renvoie l'angle courant du Robot */
  const void printDebug();
};

/**
 * @class Objective
 * @brief Permet de définir un objectif et le comportement du robot pour cet objectif*/
class Objective : public Debug{
    private :
        const std::string _name;/*!< Nom de l'objectif */
        const Position _position;/*!< Position de l'objectif */
        const time_t _time;/*!< Temps estimé pour l'objectif */
        const Action _actionneur;/*!< Actionneur nécessaire à la réalisation de l'objectif */
        const Control _control;/*!< Asservissement du robot */
    public :
        Objective();
        Objective(const Position position, const time_t time, const Action actionneur, const Control control);/*!< Constructeur d'un objectif complet */
        Objective(const Objective* objective);/*!< Constructeur par recopie */
        void treatment();/*!< Fonction de traitement de l'objectif */
        const void printDebug();
};

/**
 * @class SafetyStrat
 * @brief Stratégie de secours si la machine à État échoue*/
class SafetyStrat{
    public :
        void endOfTheWorld();
};

/**
 * @class StateMachina
 * @brief Machine à état permettant de dérouler la stratégie*/
class StateMachina : public Debug{
    private :
        World _world; /*!< Modélisation de la table */
        std::vector<Objective> _objectives; /*!< Liste des objectifs */
        Control _control; /*!< Asservissement du robot */
        Sensors _sensor; /*!< Capteurs du robot */
        SafetyStrat _caseEmergencyPushRedButton; /*!< Stratégie de secours */
    public :
        StateMachina();
        StateMachina(World, std::vector<Objective>, Control, Sensors, SafetyStrat);
        ~StateMachina();
        void initialisation(); /*!< Initialisation du robot */
        void strategyBlue(); /*!< Stratégie côté bleu */
        void strategyYellow(); /*!< Stratégie côté jaune */
};

#endif // __PROCESSING_H_
