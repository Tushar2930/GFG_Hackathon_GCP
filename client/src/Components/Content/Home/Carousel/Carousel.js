import React from "react";
import "./carousel.css"

class Application extends React.Component{
    render(){ 
      
      var iconList = [
        {iconName: "ion-pie-graph", title: 'Measurable'},
        {iconName: "ion-funnel", title: 'End-to-End'},
        {iconName: "ion-magnet", title: 'Actionable'},
        {iconName: "ion-hammer", title: 'Deliverables'}
  
      ]
      var imageNumsArray = [716, 901, 808, 381, 38, 399, 73]
      
      return <div>
        <Carousel imageList={ imageNumsArray } />
      </div>
    }
  }
  
  class Carousel extends React.Component {
    constructor(args){
      super(args)
      this.state = {
        currentImageIndex : 0
      }
    }
    
    componentDidMount(){
      setInterval(()=>{
        let currentImageIndex = this.state.currentImageIndex
        let imageList = this.props.imageList
    
        this.setState({
          currentImageIndex: currentImageIndex + 1 < imageList.length ?
            currentImageIndex + 1 :
            0       
        })
      }, 5000)
    }
    
    _changeImageIndex(num){
      this.setState({
        currentImageIndex: num
      })
    }
    
    _generateIcons(listOfNumbs){
      return listOfNumbs.map((num, indx)=>{
        var iconType
        if( indx === this.state.currentImageIndex ){
          iconType = "ion-ios-circle-filled"
        } else {
          iconType = "ion-ios-circle-outline"
        }
        
        return <i 
                 className={iconType} 
                 onClick={()=>this._changeImageIndex(indx)}/>
      })
    }
    
    render(){
      var imageUrl = 'https://picsum.photos/g/1200/900?image=' 
      var imageNum = this.props.imageList[this.state.currentImageIndex]
      
      var styleObj = {
        backgroundImage: 'url(' + imageUrl + imageNum + ')' ,
        backgroundSize: 'cover'
      }
      
      return <header style={styleObj}>
        <h1>React Carousel Funhouse</h1>
        <div>
          {this._generateIcons(this.props.imageList)}
        </div>
      </header>
    }
  }
    
   
  class MainIcons extends React.Component {
    _generateIcons(iconList){
      return iconList.map( (iconObj) => <MajorIconGroup {...iconObj}/> )
    }
    
    render(){
         
      return <main>
        { this._generateIcons(this.props.iDataList)  }
      </main>
    }
  }
  
  const MajorIconGroup = (props) => {
    return <article>
      <i className={props.iconName}/>
      <h3>{props.title}</h3>
    </article>
  }
  

  export default Application