// components/Sidebar.js
export default function Sidebar() {
    return (
      <aside className="bg-gray-800 text-white w-64 p-4">
        <h2 className="text-lg font-semibold mb-4">Active Conversations</h2>
        <div className="flex flex-col space-y-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex items-center p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
              <img src="./components/images/image" alt="profile" className="w-10 h-10 rounded-full mr-2" />
              <div>
                <h3 className="font-semibold">User {i + 1}</h3>
                <p className="text-sm text-gray-400">Last message...</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }
  