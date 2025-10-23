"use client"

import Lottie from "lottie-react"
import devAnimation from "../../public/assets/avatar.json"

export default function AnimatedAvatar(){
    return(
        <div>
            <Lottie animationData={devAnimation} loop={true}/>
        </div>
    )
}