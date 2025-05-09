
import { useNavigate } from "react-router-dom"
import { NavBar } from "../components/navbar"
import { Button } from "../components/ui/button";

const Homepage = ()=>{
    const navigate = useNavigate();
    
    return (
      <div className="bg-white dark:bg-black dark:text-white h-screen w-screen flex flex-col">
        <NavBar className="" />

        <div className="self-center place-self-center">
          <h1 className="font-cus font-GTWalsheim text-6xl mt-4 self-center place-self-center">
            Split your bills today
          </h1>
          <h2 className="font-cus font-GTWalsheim text-5xl place-self-center ">
            with FairSpilt
          </h2>

          <div className="place-self-center">
            <Button
              onClick={() => {
                navigate("/signup");
              }}
              className="font-GTWalsheim bg-purple-500 text-black"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Homepage;