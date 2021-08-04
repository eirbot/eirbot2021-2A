#include "processing.hpp"

#include <stdio.h>

#include <iostream>

int main(int argc, char *argv[]) {
  std::cout << "I'm a Robot !" << std::endl;
  std::vector<Position> obstacle;
  obstacle.push_back({100, 150});
  World world(200, 300, obstacle, BLUE);
  world.printDebug();
  Action servoGauche("servoGauche");
  Action pince("pince");
  Action servoDroit("servoDroit");
  servoGauche.printDebug();
  pince.printDebug();
  servoDroit.printDebug();

  return 0;
}

