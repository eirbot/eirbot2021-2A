#ifndef __PROCESSING_H_
#define __PROCESSING_H_
#include "world.hpp"
#include <time.h>
#include "action.hpp"
#include "sensors.hpp"

class Control : public Debug{
    private :
        Position _position;
        float _angle;
        float _speed;
    public :
        Control();
        ~Control();

        void setPosition( int dx,  int dy,  int alpha);
        void setAngle( int alpha);
        Position getPosition();
        int getAngle();
        const void printDebug();
};

class Objective : public Debug{
    private :
        const std::string _name;
        const Position _position;
        const time_t _time;
        const Action _actionneur;
        const Control _control;
    public :
        Objective();
        Objective(const Position position, const time_t time, const Action actionneur, const Control control);
        Objective(const Objective* objective);
        void treatment();
        const void printDebug();
};

class SafetyStrat{
    public :
        void endOfTheWorld();
};

class StateMachina : public Debug{
    private :
        World _world;
        std::vector<Objective> _objectives;
        Control _control;
        Sensors _sensor;
        SafetyStrat _caseEmergencyPushRedButton;
    public :
        StateMachina();
        StateMachina(World, std::vector<Objective>, Control, Sensors, SafetyStrat);
        ~StateMachina();
        void initialisation();
        void strategyBlue();
        void strategyYellow();
};

#endif // __PROCESSING_H_
