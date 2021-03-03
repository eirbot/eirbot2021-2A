cmake_minimum_required(VERSION 3.0)


project(CDR2021)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(EXECUTABLE_OUTPUT_PATH bin/${CMAKE_BUILD_TYPE})
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11 -g -O3")

set(SRCS
  src/processing.cpp)
file(GLOB HEADERS
  src/"*.hpp")
file(GLOB TSTS
  tst/*)

add_executable(project ${SRCS} ${HEADERS})

###########
# Doxygen #
###########
# add a target to generate API documentation with Doxygen
find_package(Doxygen)
option(BUILD_DOCUMENTATION "Create and install the HTML based API documentation (requires Doxygen)" ${DOXYGEN_FOUND})

if(BUILD_DOCUMENTATION)
    if(NOT DOXYGEN_FOUND)
        message(FATAL_ERROR "Doxygen is needed to build the documentation.")
    endif()

    set(doxyfile ${CMAKE_CURRENT_SOURCE_DIR}/doc/Doxyfile)

    add_custom_target(doc
        COMMAND ${DOXYGEN_EXECUTABLE} ${doxyfile}
        WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/
        COMMENT "Generating API documentation with Doxygen"
        VERBATIM)

    install(DIRECTORY ../doc/html DESTINATION share/doc)
  endif()
