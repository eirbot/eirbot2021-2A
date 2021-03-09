#ifndef __SENSORS_H_
#define __SENSORS_H_
#include "tools.hpp"

/**
 * @file sensors.hpp*/

/**
 * @class Sensors
 * @brief Classe permettant de modéliser les capteurs du robot*/
class Sensors : public Debug{
    private :
        const std::string _name;/*!< Nom du capteur */
        bool _activated;/*!<  Détermine si activé ou non*/
    public :
        Sensors();
        Sensors(const std::string name, bool _activated);
        ~Sensors();
        void onOff(); /*!< Active ou désactive un capteur */
        const void printDebug();

};

class Ultrason : public Sensors{
        Ultrason();
        ~Ultrason();
        void getDistance();
};

class Lidar: public Sensors{
        Lidar();
        ~Lidar();
        void interruptionManager();
};

#endif // __SENSORS_H_
