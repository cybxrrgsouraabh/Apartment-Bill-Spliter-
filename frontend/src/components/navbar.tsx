import { HamBurgerMenu } from "./HamburgerMenu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";


type tailwindProps = {
    className: string;
}

export const NavBar = ({className}:tailwindProps)=>{





  
    return (
      <div
        className={`flex sticky py-2 border transparent px-4 gap-4 justify-between backdrop-blur-3xl ${className}`}
      >
        <div className="font-GTWalsheim text-2xl sm:text-4xl text-purple-500 text-nowrap">
          FairSplit
        </div>

        <ul className="hidden font-mono md:flex items-center gap-4 text-nowrap text-lg ">
          <li className="text-purple-500">
            {" "}
            <a href="#">Pricing</a>
          </li>
          <li>
            {" "}
            <a href="#">About Us</a>
          </li>
          <li>
            {" "}
            <a href="#">Contact Us</a>
          </li>
          
        </ul>

        <div className="flex gap-6 font-GTWalsheim">
          <Button>SignUp</Button>
          <Button>Login</Button>
          <HamBurgerMenu />
        </div>
      </div>
    );
}


export default NavBar;