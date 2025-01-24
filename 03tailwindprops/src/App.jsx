import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Sushil",
    age: 24
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-1">Tailwind Test</h1>
      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/5187881/pexels-photo-5187881.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}

      <Card
        username="Sasha Grey" 
        btnText="Click Me"
      // anotherObj = {myObj}
      // anotherObject = {myArr}
      />
      <Card
        username="Amanda Cerny"
        btnText="Hello"
      />
    </>
  );
}

export default App;
