import React from 'react';
import ReactDOM from 'react-dom';
import './welcometiles.css';
import dsc20 from './img/DSC_0020-min.jpg';
import dsc24 from './img/DSC_0024-min.jpg';
import dsc62 from './img/DSC_0062-min.jpg';



class WelcomeTiles extends React.Component {

   componentDidMount(){
      this.interval = this.animate();
   }

   
   animate(){
      var that = this;
      
      var i=1;
      var interval = setInterval(function(){
        

         if(that.refs["_img"+i]){that.refs["_img"+i].className='';}
         
         if(i==6){
            i=0;

         }
         i++;
         if(that.refs["_img"+ i]){that.refs["_img"+ i].className='active';}
         

      }, 5000);
      return interval;
   }
   
   render() {
      return (
         <section id="welcomeTiles">
         <div  className='active' ref="_img1">
         	<img src={dsc20} /></div>
            <div  ref="_img2">
            <p>Moments make life... <br/></p><p className="right">They deserve to be painted...</p></div>
            <div ref="_img3"><img  src={dsc24} /></div>
            <div  ref="_img4">
            <p>Every smile is precious... <br/></p><p className="right">Capture it tight...</p></div>
            <div ref="_img5"><img src={dsc62} /></div>
            <div  ref="_img6">
            <p>Pictures can recreate the bliss... <br/></p><p className="right">of being together again...</p></div>

         </section>
      );
   }
   componentWillUnmount(){
      //clearInterval(this.interval);

   }
}
export default WelcomeTiles;