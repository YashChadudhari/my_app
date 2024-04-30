// export const Sub =(props)=>{
//     return(
//         <div>
//             <h1>Substraction:{parseInt(props.c)-parseInt(props.d)}</h1>
//         </div>
//     )
// }



import { Multi } from "../Multi/Multi"
export const Sub =(props)=>{
    return(
        <div>
            <h1>Substraction:{parseInt(props.a)-parseInt(props.b)}</h1>
            <Multi a = "2" b = "2"></Multi>
        </div>
    )
}