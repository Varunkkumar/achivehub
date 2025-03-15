import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export default function Feed() {
  const [achievement, setAchievement] = useState('');
  const [achievements, setAchievements] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'achievements'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAchievements(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    });

    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!achievement.trim()) return;

    try {
      await addDoc(collection(db, 'achievements'), {
        text: achievement,
        timestamp: serverTimestamp(),
        userId: currentUser.uid,
        email: currentUser.email
      });
      setAchievement('');
    } catch (err) {
      alert('Error posting achievement: ' + err.message);
    }
  };

  return (
    <div className="feed">
      <h2>Share Your Achievement</h2>
      {currentUser && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
            placeholder="What have you accomplished?"
          />
          <button type="submit">Post</button>
        </form>
      )}
      
      <div className="achievements-list">
        {achievements.map(achievement => (
          <div key={achievement.id} className="achievement-card">
            <h4>{achievement.email}</h4>
            <p>{achievement.text}</p>
            <small>{new Date(achievement.timestamp?.toDate()).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
