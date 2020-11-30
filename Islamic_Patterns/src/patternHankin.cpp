//
//  patternHankin.cpp
//  Islamic_Patterns
//
//  Created by Abhilash Balaji on 26/11/20.
//

#include "patternHankin.hpp"


patternHankin::patternHankin(ofVec2f a ,ofVec2f v){
    this->a = a;
    this->v = v;
    this->b = a+v;
}

void patternHankin::show(){
    ofSetColor(155,15,155);
    ofDrawLine(this->a, this->b);
}

void patternHankin::findEnd(&patternHankin h)
{
    // line line intersection
//    cout<<"bruh";
    
    
}
