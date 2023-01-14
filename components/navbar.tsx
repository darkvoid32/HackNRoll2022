export default function Navbar() {

  return (
    <nav className="flex flex-col justify-center overflow-hidden bg-gray-50">
      <div className='bg-blue-400'>
        <div className="flex items-center justify-between border-b container mx-auto p-3">
          <div className="text-lg font-bold text-gray-100">Travel Planner</div>
          <div className="flex items-center space-x-5 text-gray-100">
            <div>
              <button className="rounded bg-gray-100 py-1 px-2 text-slate-500 shadow-md">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};