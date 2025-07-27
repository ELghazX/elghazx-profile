import Button from "../components/Button"
import pfp from "../assets/profile_picture.webp"

function Home() {

  return (
    <main className="container mx-auto px-4 py-16 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="text-center space-y-8 lg:text-right ">
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
          <div className="flex justify-center lg:justify-end space-x-4 ">
            <Button content="VIEW PROJECTS" to="/project" />
            <Button content="MY RESUME" to="/resume" />
          </div>
        </div>

        <div className="hidden lg:flex bg-yellow-400 rounded-lg h-96 lg:h-[400px] items-center justify-center drop-shadow-[_8px_8px_rgba(55,65,81,1)]  overflow-hidden">
          <img src={pfp} alt="ghazali" className="" />
        </div>

        {/* <div className="flex bg-red-400 h-96"> </div> */}
      </div>
    </main>
  );
}

export default Home
