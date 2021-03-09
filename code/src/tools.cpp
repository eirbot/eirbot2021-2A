#include "tools.hpp"

void printVectorPosition(std::vector<Position> position){
      for (int i=0; i < position.size(); i++) {
            std::cout << "(" << position[i].x << "," << position[i].y << ")";
      }
      std::cout << std::endl;
}
