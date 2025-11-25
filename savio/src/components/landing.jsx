import myimage from "../../public/myimage.jpg"
import {Sun } from "lucide-react";
import avatar from "../../public/avatar.jpg";
import  TypingText  from "./ui/shadcn-io/typing-text";

export default function LandingPage(){
    return (
        <>
        <header className="flex justify-between z-100 items-center ml-[28px] mr-[28px] p-4 text-gray-100 mt-4">
        <img src={myimage} className="rounded-full w-[50px] h-[50px]"></img>
<nav  className="absolute z-50 ml-[450px] mt-15">
    <ul className="flex gap-4 justify-center items-center border border-gray-600 p-6 px-12 rounded-full">
        <li className="font-montserrat text-[16px]">Home</li>
        <li className="font-montserrat text-[16px]">About</li>
        <li className="font-montserrat text-[16px]">Skills</li>
        <li className="font-montserrat text-[16px]">Projects</li>
        <li>Contact</li>
    </ul>
    </nav> 
   
<Sun className="w-6 h-6 transition-transform duration-300 hover:rotate-180 hover:cursor-pointer"/>
</header>
<main>
 <section className="relative flex flex-col z-10 items-center justify-center ">
<img src={myimage} className="rounded-full w-[195px] h-[195px] absolute mt-[170px] "></img>
 
 </section>
 <section className="flex justify-center mt-[195px] font-montserrat text-[24px] text-gray-100">
<p className="">Hi,I am Dominique Savio</p>
</section>
<div className="flex justify-center items-center">
<div className="border border-gray-100 py-6 px-12 w-[500px] h-[100px] rounded-lg mt-6">
<section className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
    
    <TypingText
    text={["I craft beautiful web and mobile apps.",
        "I build clean, modern, purposeful apps.",
        "I design apps people love to use."]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className="text-4xl font-bold"
  textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
  variableSpeed={{ min: 50, max: 120 }}
/>
</section>
</div>
</div>
 </main>
        </>
        )
}