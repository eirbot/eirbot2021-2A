#ifndef __SENSORS_H_
#define __SENSORS_H_
#include "tools.hpp"

class Sensors : public Debug{
    private :
        // const std::string _name;
        // const std::string _type;
    public :
        Sensors();
        // Sensors(const std::string name, const std::string _type);
        ~Sensors();
        void interruptionManager();
        const void printDebug();

};


#endif // __SENSORS_H_
