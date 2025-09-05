import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { Mail } from "lucide-react";
import "../cssfiles/Profile.css";
export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            // fallback if Firestore doc is missing
            setUserData({
              name: user.displayName || "New User",
              email: user.email,
            });
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!userData) return <p>No profile data found.</p>;

  return (
    <div className="profile-container">
      <h2>Welcome, {userData.name} 👋</h2>
      <p className="profile-email">
        <Mail size={18} style={{ marginRight: "8px", verticalAlign: "middle" }} />
        {userData.email}
      </p>
      {userData.createdAt && (
        <p>Joined: {userData.createdAt.toDate().toLocaleString()}</p>
      )}
    </div>
  );
}
