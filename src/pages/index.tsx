import GreetingView from "@/views/Greeting";
import TeamView from "@/views/Team";
import LoginView from "@/views/Login";
import Posts from "@/views/Posts";
import React from "react";
import {Footer} from "@/components";
import {SliderRs} from "@/components/Carousel";

export default function Home() {
    return (
        <div>
            <GreetingView/>
            <TeamView/>
            <LoginView/>
            <Posts/>
            <SliderRs/>
            <Footer/>
        </div>
  )
}
