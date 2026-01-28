import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react"
import { auth } from "../../../../FirebaseConfig";
import { Navigate } from "react-router-dom";

export default function ProtectRouter({ children }: { children: React.ReactElement }) {
    const [loading, setLoad] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoad(false);
        });
        return () => unsubscribe()
    }, [])

    if (loading) {
        return <div className="text-White-80">Carregando...</div>; // Pode trocar por spinner bonitão
    }
    if (!user) {
        return <Navigate to="/geesh-website/AdminSignIn/" />;
    }

    return children
}
