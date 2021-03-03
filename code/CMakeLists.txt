cmake_minimum_required(VERSION 3.0)

project(project)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(EXECUTABLE_OUTPUT_PATH bin/$(CMAKE_BUILD_TYPE))
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -g -O3")
