//
//  patternEdge.hpp
//  Islamic_Patterns
//
//  Created by Abhilash Balaji on 26/11/20.
//

#ifndef patternEdge_hpp
#define patternEdge_hpp
#include "ofMain.h"
#pragma once
#include <stdio.h>
#include "patternHankin.hpp"

class patternEdge{
private:
    float angle = 60;
    ofVec2f a = ofVec2f(0,0);
    ofVec2f b = ofVec2f(0,0);
    patternHankin h1 = patternHankin(ofVec2f(0,0),ofVec2f(0,0));
    patternHankin h2 = patternHankin(ofVec2f(0,0),ofVec2f(0,0));
    public :
    patternEdge(ofVec2f,ofVec2f);
    void show();
    void hankin();
    void findEnd(&patternEdge);
    
};

#endif /* patternEdge_hpp */
