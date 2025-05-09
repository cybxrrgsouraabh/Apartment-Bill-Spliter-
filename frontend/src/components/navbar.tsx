import { HamBurgerMenu } from "./HamburgerMenu";
import { Button } from "./ui/button";



export const NavBar = ()=>{





  
    return (
      <div
        className={`flex sticky fixed top-0 py-2 border transparent px-4 gap-4 justify-between backdrop-blur-3xl `}
      >
        <div className="font-GTWalsheim text-2xl sm:text-4xl text-purple-500 text-nowrap ">
          FairSplit
        </div>

        <ul className="hidden font-mono md:flex items-center gap-4 text-nowrap text-lg ">
          <li className="border rounded-4xl p-2 hover:bg-gray-900">
            {" "}
            <a href="#">About Us</a>
          </li>
          <li className="border rounded-4xl p-2 hover:bg-gray-900">
            {" "}
            <a href="#">Pricing</a>
          </li>
          <li className="border rounded-4xl p-2 hover:bg-gray-900">
            {" "}
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className="flex gap-6 font-GTWalsheim">
          <Button className="hidden sm:block">SignUp</Button>
          <Button>Login</Button>
          <HamBurgerMenu />
        </div>
      </div>
    );
}


export default NavBar;