import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BootcampData } from "../Components/BootcampData";
import { Footer } from "../Components/Functional/Footer";
import { HeadSection } from "../Components/Functional/HeaderSection";
import { NavBar } from "../Components/Functional/Nav";
import BootcampList from '../Data/bootcamp.json'


const BootcampDetails = () => {
    // hook for taking the param s to the component

    const menuItems = [

        { text: "Home", href: "/" },
        { text: "Contact", href: "/contact" },
        { text: "About Us", href: "/about" },
        { text: "Bootcamps", href: "/bootcamps" },
    ]


    let [bootcampList, setBootcampList] = useState()
    let params = useParams();

    useEffect(() => {
        async function getMenus() {

            try {
                const response = await fetch("http://localhost:8080/uisettings/menus")
                let json = response.json()
                json
                    .then(data => {
                        setBootcampList(data)
                        console.log("All Data ", data)
                    })
            } catch (error) {
                let array = BootcampList.BootcampList
                setBootcampList(array)

            }

        }
        getMenus() // IIF
        console.log("Dheeraj 123", bootcampList)
    }, [])

    let bootcampItem = BootcampList.BootcampList.filter((x) => x.id == params.bootcampId)
    console.log(bootcampItem[0].image)

    return (
        <>
         <NavBar items={menuItems}></NavBar>
            {
                bootcampItem.map(data => {
                    return (
                        <>
                      
                        <BootcampData data={data}></BootcampData>
                        </>
                    )
                })
            }
        <Footer></Footer>
        </>
    )
}


export default BootcampDetails