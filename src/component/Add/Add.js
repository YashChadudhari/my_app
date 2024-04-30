
// export const Add =(props)=>{
//     return(
//         <div>
//             <h1>
//                 Addition:{parseInt(props.a) + parseInt(props.b)}
//             </h1>
//         </div>
//     );
// }


import { Sub } from "../Sub/Sub";
export const Add =(props)=>{
    return(
        <div>
            <h1>Addition:{parseInt(props.a)+parseInt(props.b)}</h1>
            <Sub a ="3" b="4"></Sub>
        </div>
    );
}