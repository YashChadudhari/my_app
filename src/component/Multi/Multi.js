// export const Multi =(props)=>{
//     return(
//         <div>
//             <h1>Multiplication:{parseInt(props.e)*parseInt(props.f)}</h1>
//         </div>
//     );
// }



import { Div } from "../Div/Div";
export const Multi =(props)=>{
    return(
        <div>
            <h1>Multiplication:{parseInt(props.a)*parseInt(props.b)}</h1>
            <Div a ="12" b="3"></Div>
        </div>
    );
}