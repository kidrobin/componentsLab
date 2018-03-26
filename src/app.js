import React from 'react';
import ReactDOM from 'react-dom';

import ScrollMain from './components/ScrollMain';


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

class ComponentsLab extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: `Bacon ipsum dolor amet spare ribs prosciutto
                shoulder pig boudin. Beef ribs meatloaf sirloin
                ham pastrami hamburger tri-tip tongue tenderloin
                boudin corned beef cow beef spare ribs.
                Tri-tip porchetta tenderloin pig, pork belly
                bresaola pork pork chop. Pastrami pig buffalo cow.
                Tail short loin meatloaf hamburger kevin porchetta jerky drumstick.
                Ribeye prosciutto boudin landjaeger tri-tip chicken hamburger tenderloin
                swine short ribs pancetta jerky pastrami. Boudin burgdoggen sirloin,
                cupim meatloaf ham pork chop salami hamburger pork.

                Pork pork loin pork belly capicola. Pancetta ribeye filet mignon
                rump porchetta pork frankfurter turducken tongue. Andouille tenderloin beef,
                 turducken picanha kevin pastrami cow tongue salami short ribs. Brisket meatball
                  rump turkey pork chop pork, drumstick shoulder hamburger fatback chuck. Ham tail
                  turducken cupim chuck leberkas. Salami ground round t-bone, venison kielbasa beef
                  ribs pancetta tongue porchetta hamburger.

                Chicken meatball leberkas flank pancetta,
                 fatback kevin tongue buffalo. Pork belly
                  bresaola pastrami tail pork loin meatball fatback corned
                   beef spare ribs jowl bacon ball tip frankfurter andouille.
                    Turducken tail burgdoggen, pig pork chop hamburger
                pork loin kevin cupim spare ribs picanha cow.
                 Kevin porchetta drumstick pork loin leberkas shank.

                Beef ribs pig swine, andouille tail ham hamburger shankle pork chop shoulder
                sausage porchetta.
                Salami corned beef spare ribs leberkas. Corned beef filet mignon pork
                loin pastrami jowl meatloaf biltong bresaola chicken cupim salami brisket
                t-bone pork belly. Flank corned beef porchetta kielbasa capicola.
                Salami spare ribs ground round, kielbasa drumstick biltong jowl tri-tip.
                Spare ribs ham pork belly boudin, landjaeger short loin leberkas chicken kevin.
                Venison ham hock picanha pork, kielbasa drumstick meatball ground round jowl pork
                belly beef ribs biltong salami t-bone shank.`,
      title: 'Some Title'
    }
  }

  render(){
    return(
      <div className="container">
        <h1>Campo de Scroll con Fade</h1>

        <div className="row">
          <div className="col-md-12">

            <ScrollMain text={this.state.text} title={this.state.title}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ComponentsLab />, document.getElementById('app'));
