import React from 'react';

const Dropdown2 = props => {    

    const dropdownChanged = e => {
        props.changed(e.target.className);
    }    

    return (
        <section id={props.selectedValue} className="collum collum__hidden" onClick={dropdownChanged}>
        <a className="link__decoration link__track hover__track link__one" href="#">
          <div className="">
            {props.options.map((item, idx) => 
            <div id="container" className={item.id} >
                <div key={idx + 1} id="content__track" className={item.id}>
              <img id="img__tarck" className={item.id} src={item.images[0].url}/>
              <div id="name" className={item.id} >{item.name}</div></div>
            </div>)}
          </div> 
        </a>
        </section>
    );
}

export default Dropdown2;