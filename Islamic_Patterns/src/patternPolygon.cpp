//
//  patternPolygon.cpp
//  Islamic_Patterns
//
//  Created by Abhilash Balaji on 26/11/20.
//

#include "patternPolygon.hpp"

void patternPolygon::show(){
    for(auto i : edges)
        i.show();
}

void patternPolygon::addVertex(ofVec2f a)
{
    
    if(this->vertices.size()>0)
    {
        this->prev = this->vertices.back();
        patternEdge edge =  patternEdge(prev,a);
        this->edges.push_back(edge);
    }
    
    this->vertices.push_back(a);
    
    
}

void patternPolygon::close()
{
    this->edges.push_back(patternEdge(this->vertices.back(),this->vertices[0]));
}

void patternPolygon::hankin()
{
    for(auto i : this->edges)
        i.hankin();
}

