import { useRef } from "react";

export const SimpleRef = () =>{
    const inputRefName = useRef();
    const inputRefPassword = useRef();

    const onClick = (e)=>{
        switch(e.target.id){
            case "log":
                console.log("Input Value", inputRefName.current?.value)
                break;

            case "focus":
                console.log("focus Log")
                inputRefName.current?.focus()
                break;
            case "login":
                if(inputRefName.current?.value===inputRefPassword.current?.value){
                    alert("Both are OK")
                }
                else{
                    alert("Both are NOT OK")
                }
            default :
                break;
        }

    }

    return(
        <>
            <div>
                Enter the user Name
                <input type="text" ref={inputRefName} />
                Enter the password
                <input type="text" ref={inputRefPassword} />
                <button id="log" onClick={e=>onClick(e)}>Log Value</button>
                <button id="focus" onClick={e=>onClick(e)}>Focus on input</button>
                <button id="login" onClick={e=>onClick(e)}>login</button>
            </div>
        </>

    )

}