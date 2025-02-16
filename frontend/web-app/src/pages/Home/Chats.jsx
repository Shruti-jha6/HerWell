import React, { useRef, useState } from "react";
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

function Chats() {
  const [user] = useAuthState(auth);
  const [searchParams] = useSearchParams();
  const community = searchParams.get("community");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <header className="flex justify-between items-center border-b pb-3">
          <h1 className="text-xl font-semibold">{community} Chat</h1>
          <SignOut />
        </header>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Leave Chat
        </button>
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

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.trim()) return;
    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(firestore, "messages"), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL: photoURL || "https://api.adorable.io/avatars/23/default.png",
    });

    setFormValue("");
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-4">
      <div className="h-60 overflow-y-auto bg-gray-200 p-4 rounded-lg">
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage} className="mt-4 flex">
        <input
          className="flex-1 p-2 border rounded-l-lg"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600" type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className="p-2">
      <p>{message.text}</p>
    </div>
  );
}

export default Chats;
