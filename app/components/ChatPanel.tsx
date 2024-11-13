// components/ChatPanel.js
export default function ChatPanel() {
    return (
      
      <div className="flex flex-col w-full p-4 bg-gray-900 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Andri Thomas</h2>
          <button className="text-sm text-yellow-500">3 Dot Action: Report</button>
        </div>
        <div className="flex flex-col mt-4 space-y-4 overflow-y-auto">
          <div className="self-start bg-gray-800 p-3 rounded-md max-w-md">
            I want to make an appointment tomorrow from 2:00 to 5:00 pm?
          </div>
          <div className="self-end bg-yellow-600 p-3 rounded-md max-w-md">
            Hello, Thomas! I will check the schedule and inform you.
          </div>
          <div className="self-start bg-gray-800 p-3 rounded-md max-w-md">
            Ok, Thanks for your reply.
          </div>
          <div className="self-end bg-yellow-600 p-3 rounded-md max-w-md">
            You are welcome!
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none"
          />
        </div>
      </div>
    );
  }
  