// src/components/PackageManager.js
import React, { useState } from "react";

const PackageManager = ({ onAddPackage }) => {
  const [packageName, setPackageName] = useState("");

  const handleAddPackage = async () => {
    if (!packageName) return;
  
    try {
      const response = await fetch("http://localhost:5000/api/packages/install", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ packageName }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        onAddPackage(packageName, "latest");
      } else {
        alert("Failed to install package!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <div className="package-manager">
      <input
        type="text"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        placeholder="Enter package name"
      />
      <button onClick={handleAddPackage}>Add Package</button>
    </div>
  );
};

export default PackageManager;
