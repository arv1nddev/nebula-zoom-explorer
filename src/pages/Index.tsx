import { useState, useContext } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DatasetGallery } from "@/components/DatasetGallery";
import { ImageViewer } from "@/components/ImageViewer";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { supabase } from "@/supabaseClient";
import { AuthContext } from "@/contexts/AuthContext";

export type Dataset = {
  id: string;
  title: string;
  description: string;
  image: string;
  resolution: string;
  updates: string;
  coordinates?: string;
  captureDate?: string;
};

const Index = () => {
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);


  if (user) {
    return (
      <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <DatasetGallery onSelectDataset={setSelectedDataset} selectedId={selectedDataset?.id} />
        <ImageViewer dataset={selectedDataset} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) alert(error.message);
  };

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) alert(error.message);
    else alert("Check your email for confirmation link!");
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
    if (error) alert(error.message);
  };
  return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    <div className="bg-white p-10 rounded-3xl shadow-xl w-96 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition"
      >
        Login
      </button>
      <button
        onClick={handleSignUp}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
      >
        Sign Up
      </button>
      <div className="flex items-center gap-4 my-2">
        <hr className="flex-1 border-gray-300" />
        <span className="text-gray-500">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-100 rounded-lg py-3 font-semibold transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google"
          className="w-6 h-6"
        />
        Continue with Google
      </button>
    </div>
  </div>
  );

  // show main Index content if user is logged in
};

export default Index;
