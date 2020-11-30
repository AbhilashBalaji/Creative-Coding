//
//  patternHankin.hpp
//  Islamic_Patterns
//
//  Created by Abhilash Balaji on 26/11/20.
//

#ifndef patternHankin_hpp
#define patternHankin_hpp

#include <stdio.h>
#pragma once
#include "ofMain.h"

class patternHankin{
    private :
    ofVec2f a = ofVec2f(0,0) ;
    ofVec2f v = ofVec2f(0,0);
    ofVec2f b = ofVec2f(0,0);
    public :
    patternHankin(ofVec2f,ofVec2f);
    void show();
    void findEnd(&patternHankin);
};

#endif /* patternHankin_hpp */
