import React from "react";
import { useState } from "react";

export function form(){
    const [name, setName] = useState()

    return (
        <div>
            <form> 
                <input value={name}></input>
            </form>
        </div>
    )
}