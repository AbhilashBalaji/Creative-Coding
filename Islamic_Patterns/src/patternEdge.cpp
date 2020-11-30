//
//  patternEdge.cpp
//  Islamic_Patterns
//
//  Created by Abhilash Balaji on 26/11/20.
//

#include "patternEdge.hpp"

patternEdge::patternEdge(ofVec2f a1, ofVec2f a2 ){
    this->a = a1;
    this->b = a2;
}

void patternEdge::show(){
    ofSetColor(ofColor(255));
    ofDrawLine(this->a, this->b);
    
}

void patternEdge::hankin(){
    ofVec2f mid =(this->a +this->b)*0.5;
    ofVec2f h1 =  this->a -mid;
    ofVec2f h2 =  this->b -mid;
    h1.rotate(-this->angle);
    h2.rotate(this->angle);
    this->h1 = patternHankin(mid,h1);
    this->h2 = patternHankin(mid,h2);
    this->h1.show();
    this->h2.show();
    
}

void patternEdge::findEnd(&patternEdge edge)
{
    this->h1.findEnd(edge->h1);
    this->h2.findEnd(edge->h2);
    this->h1.findEnd(edge->h2);
    this->h2.findEnd(edge->h1);
}

