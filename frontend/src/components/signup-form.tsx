import { cn } from "../lib/utils";
import axios from "axios";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useEffect, useState } from "react";
import { url } from "inspector";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState<string>("");
  const [firstName, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNo, setPhone] = useState<number>(0);
  const [password, setPassword] = useState<string>("");

 

  
  
  const onClickHandler = async(e:React.FormEvent)=>{
    e.preventDefault();

    console.log({
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNo: phoneNo,
      password: password,
    });
    try {
      console.log("entered the onClickHandler which is sending the api request")
      const response = await axios.post("http://localhost:3000/auth/signup",{
        email,
        password,
        firstName,
        lastName,
        phoneNo
      });

      console.log("api req probably sent");
      console.log(response);
    } catch (error:any) {
      console.log("chud gaye guru")
      console.error(error);
  
    };
    
  };



  return (
    <div
      className={cn("flex self-center flex-col gap-6 mx-4 ", className)}
      {...props}
    >
      <Card className="">
        <CardHeader>
          <CardTitle className="text-xl ">Sign Up</CardTitle>
          <CardDescription>Enter your details below to sign up</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone-input">Contact No.</Label>
                <Input
                  id="phone-input"
                  type="number"
                  placeholder="9582xxxxxx"
                  required
                  onChange={(e) => setPhone(parseInt(e.target.value))}
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m..example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" sm:mt-8 flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full"
                  onClick={(e)=>onClickHandler(e)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Login
              </a>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
