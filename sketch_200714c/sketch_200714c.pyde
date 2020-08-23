class Point():
    def __init__(self,x,y):
        self.x = x
        self.y = y
        
    def jiggle(self,ex,ey,factor):
        if ex :
            self.x =self.x + factor*noise(self.x,self.y)
        if ey :
            self.y =self.y + factor*noise(self.x,self.y)

class JoyLine():
    def __init__(self,startPoint,endPoint,num):
        self.startPoint = startPoint
        self.endPoint = endPoint
        self.Points = []
        for i in range(num): 
            x = lerp(startPoint.x, endPoint.x, i/float(num)) 
            y = lerp(startPoint.y, endPoint.y, i/float(num))
            self.Points.append(Point(x, y))

    def drawLine(self,strok):
        stroke(strok)
        for i in range(1,len(self.Points)):
            line(self.Points[i-1].x,self.Points[i-1].y,self.Points[i].x,self.Points[i].y)
            
    def jiggleAll(self):
        for i in range(len(self.Points)):
            # r = random(-1,1)
            # if r > 0:
            self.Points[i].jiggle(False,True,20)
        
    '''
    extremes[0] = min
    extremes[1] = max
    '''
def Normalise(extremes,data):
    return list(map(lambda x : (x-extremes[0])/(extremes[1]-extremes[0]),data))
        

SIZE = 2000
def setup():
  # fullScreen()
  size(SIZE,SIZE)
  fill(0)
  noStroke()
  frameRate(0)
  draw(40)
    
def draw(n_lines):
      
    strokeWeight(2)
    
    for i in range(1,n_lines):
        j  = JoyLine(Point(0,height/n_lines*i),Point(width,height/n_lines*i),50)
        j.jiggleAll()
        j.drawLine(126)
        
