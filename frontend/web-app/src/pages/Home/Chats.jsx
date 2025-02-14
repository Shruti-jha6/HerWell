import React, { useRef, useState } from 'react';
import './Chats.css'; // Assuming you'll create a separate CSS file for styling.
import { getFirestore, collection, orderBy, query, addDoc, serverTimestamp, limit } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



// Firebase initialization (import if not already initialized elsewhere)
import { initializeApp } from "firebase/app";

const firebaseConfig = {
//   apiKey: "AIzaSyB1eF21YMArrEcUGLeLAz_oKkINeDtpDaI",
//   authDomain: "chat-bot-fa8a7.firebaseapp.com",
//   projectId: "chat-bot-fa8a7",
//   storageBucket: "chat-bot-fa8a7.appspot.com",
//   messagingSenderId: "55407579593",
//   appId: "1:55407579593:web:40edca100f6910b04cd818",
//   measurementId: "G-KEDVNQSK9G"
  apiKey: "AIzaSyD7CTumeAgKZwqnFTCBb6ot7W-vGyZEHIo",
  authDomain: "new-project-f39ae.firebaseapp.com",
  projectId: "new-project-f39ae",
  storageBucket: "new-project-f39ae.firebasestorage.app",
  messagingSenderId: "1090070141642",
  appId: "1:1090070141642:web:b0b73ee592a3505e08b233",
  measurementId: "G-BHZ6XJTLWM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function Chats() {
  const [user] = useAuthState(auth);

  return (
    <div className="Chats">
      <header>
        <h1>Community Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Respect the community rules to ensure a safe space for everyone!</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => signOut(auth)}>Sign Out</button>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <main>
        {messages && messages.map((msg, index) => <ChatMessage key={msg.id || index} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input className="ipt" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Share your thoughts" />
        <button className="sending" type="submit" disabled={!formValue}>Send</button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User Avatar" />
      <p>{text}</p>
    </div>
  );
}

export default Chats;