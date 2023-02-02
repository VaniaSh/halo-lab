import GreetingView from "@/views/Greeting";
import TeamView from "@/views/Team";
import LoginView from "@/views/Login";
import Posts from "@/views/Posts";

export default function Home() {
  return (
      <div>
        <GreetingView/>
          <TeamView/>
          <LoginView/>
          <Posts/>

      </div>
  )
}
