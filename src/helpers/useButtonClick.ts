import React, { Component } from 'react'

const useButtonClick = (baseComponent:React.FC | React.ComponentClass) => {
    class elevatedComponent extends Component{
        constructor(props:any){
            super(props)
            this.state = {
                isActive: false
            }
        }

        handleMouseDown = () =>{
            console.log(`Mouse Down`)
        }
    }
    return elevatedComponent
}


export default useButtonClick