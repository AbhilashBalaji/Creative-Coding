//
//  patternPolygon.hpp
//  Islamic_Patterns
//
//  Created by Abhilash Balaji on 26/11/20.
//

#ifndef patternPolygon_hpp
#define patternPolygon_hpp
#include "patternEdge.hpp"
#include <stdio.h>
#pragma once
#include "ofMain.h"
//#include "patternEdge.hpp"

#include <vector>
class patternPolygon{
private:
//    std::vector<patternEdge> edges;
    std::vector<ofVec2f> vertices;
    std::vector<patternEdge> edges;
    ofVec2f prev = ofVec2f(0,0);
    public :
    void show();
    void addVertex(ofVec2f);
    void close();
    void hankin();
    
};
#endif /* patternPolygon_hpp */
