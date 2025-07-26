import { Link } from "react-router"
import Button from "../components/Button"

function Home() {

  return (
    <main className="container mx-auto px-4 py-16 b">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="space-y-8 text-right ">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-700 mb-4">
              MUHAMMAD GHAZALI
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-2">
              ASPIRING BACKEND DEVELOPER
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
              AND DEVOPS ENTHUSIAST
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed ">
              I love building reliable backend systems, automating workflows, and learning Linux-based infrastructures.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 ">
            <Button content="VIEW PROJECTS" to="/project" />
            <Button content="MY RESUME" to="/resume" />
            {/* <button */}
            {/*   className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 text-sm tracking-wide transform hover:scale-105" */}
            {/* > */}
            {/*   VIEW PROJECT */}
            {/* </button> */}
            {/* <button */}
            {/*   className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 text-sm tracking-wide transform hover:scale-105" */}
            {/* > */}
            {/*   MY RESUME */}
            {/* </button> */}
          </div>
        </div>

        {/* Right Content - Yellow Box */}
        <div className="bg-yellow-400 rounded-lg h-96 lg:h-[400px] flex items-center justify-center shadow-lg">
          <div className="text-center text-black">
            <div className="w-32 h-32 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
              <span className="text-4xl font-bold">MG</span>
            </div>
            <p className="text-sm opacity-75">Portfolio Image</p>
          </div>
        </div>
      </div>
    </main>
  );

  // return (
  //   <div className="min-h-screen">
  //     <main className=" grid grid-cols-2 gap-4 mt-2 pt-8 ">
  //       <section className="text-right">
  //         <h1 className="text-6xl font-bold font-display">Muhammad Ghazali</h1>
  //         <h2 className="text-2xl font-bold font-display ">Aspiring Backend Developer and DevOps Enthusiast</h2>
  //         <p className="text-base mt-2">I love building reliable backend systems, automating workflows, and learning Linux-based infrastructures.</p>
  //         <div className="mt-12">
  //           <Button content="VIEW PROJECTS" to="/project" className="mr-4" />
  //           <Button content="MY RESUME" to="/resume" />
  //         </div>
  //       </section>
  //
  //       <section className="flex justify-center">
  //         <div className="bg-[#FFD65A] h-80 w-80 p-4"></div>
  //       </section>
  //
  //     </main>
  //   </div>
  // )
}

export default Home
