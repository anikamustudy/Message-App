// pages/index.js
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/ChatPanel";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <ChatPanel />
      </div>
    </div>
  );
}


