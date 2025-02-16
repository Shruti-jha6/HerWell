import React, { useRef, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  limit
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useSearchParams, useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyD7CTumeAgKZwqnFTCBb6ot7W-vGyZEHIo",
  authDomain: "new-project-f39ae.firebaseapp.com",
  projectId: "new-project-f39ae",
  storageBucket: "new-project-f39ae.appspot.com",
  messagingSenderId: "1090070141642",
  appId: "1:1090070141642:web:b0b73ee592a3505e08b233",
  measurementId: "G-BHZ6XJTLWM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const fakeUsers = [
  { id: 1, name: "Alice", photoURL: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alice" },
  { id: 2, name: "Bob", photoURL: "https://api.dicebear.com/6.x/avataaars/svg?seed=Bob" },
  { id: 3, name: "Charlie", photoURL: "https://api.dicebear.com/6.x/avataaars/svg?seed=Charlie" },
  { id: 4, name: "David", photoURL: "https://api.dicebear.com/6.x/avataaars/svg?seed=David" },
  { id: 5, name: "Eve", photoURL: "https://api.dicebear.com/6.x/avataaars/svg?seed=Eve" }
];

function Chats() {
  const [user] = useAuthState(auth);
  const [searchParams] = useSearchParams();
  const community = searchParams.get("community") || "General";
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <header className="flex justify-between items-center border-b pb-3">
          <h1 className="text-xl font-semibold">{community} Chat</h1>
          <SignOut />
        </header>

        <div className="flex">
          {/* Members List */}
          <div className="w-1/4 border-r p-4 bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Group Members</h2>
            <ul>
              {fakeUsers.map((user) => (
                <li key={user.id} className="flex items-center space-x-2 mb-2">
                  <img src={user.photoURL} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm">{user.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4">
            <section>{user ? <ChatRoom /> : <SignIn />}</section>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Leave Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="text-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
      <p className="text-sm text-gray-600 mt-2">
        Respect the community rules to ensure a safe space for everyone!
      </p>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt", "asc"), limit(50));

  const [messages] = useCollectionData(q, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    // Simulate fake users sending messages
    const interval = setInterval(() => {
      const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
      const randomText = [
        "I'm feeling anxious today. Any advice?",
        "How do you all cope with stress?",
        "Meditation has really helped my mental health!",
        "Self-care is so important. What do you all do for it?",
        "Does anyone have book recommendations on mindfulness?"
      ][Math.floor(Math.random() * 5)];

      addDoc(messagesRef, {
        text: randomText,
        createdAt: serverTimestamp(),
        uid: randomUser.id,
        photoURL: randomUser.photoURL,
        displayName: randomUser.name,
      });
    }, 10000); // Fake messages every 10 sec

    return () => clearInterval(interval);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.trim()) return;
  
    const { uid, photoURL, displayName } = auth.currentUser;
  
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL: photoURL || "https://api.dicebear.com/6.x/avataaars/svg?seed=default", // Default avatar
      displayName: displayName || "Anonymous",
    });
  
    setFormValue("");
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <div className="mt-4">
      <div className="h-80 overflow-y-auto bg-gray-200 p-4 rounded-lg">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage} className="mt-4 flex">
        <input
          className="flex-1 p-2 border rounded-l-lg"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          type="submit"
          disabled={!formValue}
        >
          Send
        </button>
      </form>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className="flex items-center space-x-2 p-2">
      <img
        src={message.photoURL || "https://api.dicebear.com/6.x/avataaars/svg?seed=default"} 
        alt="avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="bg-white p-2 rounded-lg shadow">
        <p className="text-sm font-semibold">{message.displayName || "Anonymous"}</p>
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}



export default Chats;
