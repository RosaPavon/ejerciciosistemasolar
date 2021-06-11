import { useState } from "react"
import sistemasolar from "./sistemasolar";
function Planeta(props) {
    const catalogo= props.sistemasolar.map((mundo, index)=>{
        return (
            <Tarjeta 
            index={index}
            nombre={mundo.nombre}
            color={mundo.color}
            imagen={mundo.imagen}
            temperatura={mundo.temperatura}
            />
        );

    })

    function Tarjeta(props){
        const deleteplaneta = (props) =>{
               
           console.log(props)
          
        

        }
        return(
            <>
            <div key={props.index} className="card">
            <div className="container">
            <h1>{props.nombre}</h1>
            <img src={props.imagen} alt={props.nombre}/>
            <p>{props.color}</p>
            <p>{props.temperatura}</p>   
            <button onClick={() => deleteplaneta(props)}>Eliminar</button>               

                     
            

            </div>
            </div>
            </>
        )
    }

    return (
        <>
        <div key="mundos" className="catalogo">{catalogo}
        </div>
        </>
    );
    
  }
export default Planeta;