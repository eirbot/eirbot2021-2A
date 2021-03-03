class Debug{
    private :
        bool _debug;
    public :
      void debugable() {
        if (_debug == true)
          this->printDebug();
      }
      virtual void printDebug() = 0;
};
