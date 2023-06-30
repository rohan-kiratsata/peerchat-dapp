import ChatBubble from "./components/ChatBubble";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function page() {
  return (
    <>
      <section className="flex">
        <aside>
          <Sidebar />
        </aside>
        <div className=" w-full">
          <header className="sticky top-0 z-20">
            <Navbar />
          </header>

          {/* Message container */}
          <div className="p-5 overflow-y-auto custom-scrollbar">
            {/* Greetings */}
            <div className="">
              <h2 className="text-2xl font-medium">Welcome to #general-chat</h2>
              <p className="mt-2">
                This is the start of #general-chat channel.
              </p>
            </div>
            {/* Divider */}
            <div className="divider text-xs text-gray-500">Jul 1, 2023</div>
            {/* Messages */}
            <div>
              <ChatBubble
                message="Hi Rohan 👋, How are you doing?"
                time="05:32 PM"
                sender="Gourav"
              />
              <ChatBubble
                isSent={true}
                message="Hi Gourav, I'm doing great! How 'bout u?"
                time="05:32 PM"
                sender="Rohan K"
              />
              <ChatBubble
                isSent={false}
                message="cool! How's your business going?"
                time="05:34 PM"
                sender="Gourav"
              />
              <ChatBubble
                isSent={true}
                message="It's doing awesome 🔥"
                time="05:34 PM"
                sender="Rohan K"
              />
              <ChatBubble
                isSent={true}
                message="It's doing awesome 🔥"
                time="05:34 PM"
                sender="Rohan K"
              />
              <ChatBubble
                isSent={true}
                message="It's doing awesome 🔥"
                time="05:34 PM"
                sender="Rohan K"
              />
              <ChatBubble
                isSent={true}
                message="It's doing awesome 🔥"
                time="05:34 PM"
                sender="Rohan K"
              />
              <ChatBubble
                isSent={true}
                message="It's doing awesome 🔥"
                time="05:34 PM"
                sender="Rohan K"
              />
              <ChatBubble
                isSent={true}
                message="It's doing awesome 🔥"
                time="05:34 PM"
                sender="Rohan K"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 bg-base-100 sticky bottom-0">
            <input
              type="text"
              placeholder="Message..."
              class="input w-full bg-[#2d353d]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
