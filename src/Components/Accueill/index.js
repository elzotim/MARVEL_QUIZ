import React, { Fragment, useEffect, useRef, useState } from 'react';

const Landing = () => {
   const   [btn,setbtn]=useState(false)
    //useRef me permettra de rajoutter une nouvelle class et a la balise main 
    //on lunitilise et puis on laffect a latribut ref dans la balise main ce qui
    // va permettre dacceder a current et a son classlist
    //et le classlist.add vas permet dajouter une classe;

    const refWolverin = useRef(null); 
    console.log(refWolverin);
    useEffect(()=>{
        //la classname strartingImg permet de metttre les griffes 
        //et time out le fait disparaitre 3 snd apres
         refWolverin.current.classList.add("startingImg");
         setTimeout(()=>{
         refWolverin.current.classList.remove("startingImg");
         setbtn(true)
         }, 3000)
    },[])
    const animationImgleft =()=>{
        refWolverin.current.classList.add("leftImg");

    }
    const animationImgRight =()=>{
        refWolverin.current.classList.add("rightImg");

    }
/***elever limgage de gauche si elle est affiché au passage et apres passage du sourris */
   const  enleveImgleft = ()=>{
       if (refWolverin.current.classList.contains("leftImg")) {
        refWolverin.current.classList.remove("leftImg");
       } 
   }
   /***elever limgage de gauche si elle est affiché au passage et apres passage du sourris */
   const  enleveImgRight = ()=>{
       if (refWolverin.current.classList.contains("rightImg")) {
        refWolverin.current.classList.remove("rightImg");
       }
   }





    const  Displaybtn = btn  && 
    (
             <Fragment>
                 <div  onMouseOver={animationImgleft} onMouseOut={enleveImgleft} className='leftBox'>
               <button className='btn-welcome' >Inscription</button>
           </div>
           <div onMouseOver={animationImgRight} onMouseOut={enleveImgRight} className='rightBox'>
               <button className='btn-welcome'>Connection</button>
           </div>
             </Fragment>
    )
    return (



        <main ref={refWolverin} className='welcomePage'>
           {Displaybtn}
        </main>
    );
};

export default Landing;