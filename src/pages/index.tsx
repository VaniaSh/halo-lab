import GreetingView from "@/views/Greeting";
import TeamView from "@/views/Team";
import LoginView from "@/views/Login";
import Posts from "@/views/Posts";
import React from "react";
import {CustomSlider, Footer} from "@/components";
import {SliderItem} from "@/components/SliderElement";

export default function Home() {
  return (
      <div>
          <GreetingView/>
          <TeamView/>
          <LoginView/>
          <Posts/>
          <CustomSlider/>
          <Footer/>
          <SliderItem/>


      </div>
  )
}
