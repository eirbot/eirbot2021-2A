#include "action.hpp"

Action::Action(const std::string name):_name(name),_state(false){

}

Action::~Action(){

}
void Action::changeState(){
    std::cout << "Je change d'état : ";
    if (_state==false) {
        _state=true;
        std::cout << "je m'active !" << std::endl;
    }
    else{
        _state=false;
        std::cout << "je me désactive !" << std::endl;
    }
}

const void Action::printDebug(){
    std::cout << "\033[33mDébug de la classe Action : \033[0m" << std::endl;
    std::cout << "\t Nom  : " << this->_name << std::endl;
    std::cout << "\t État : " << this->_state << std::endl;

}
