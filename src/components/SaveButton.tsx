"use client";
import { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

interface SaveButtonProps {
  itemId: string;
  itemTitle: string;
  itemType: "tool" | "stack" | "prompt" | "guide";
}

export default function SaveButton({ itemId, itemTitle, itemType }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`saved_${itemType}_${itemId}`);
    setIsSaved(saved === "true");
  }, [itemId, itemType]);

  const toggleSave = () => {
    if (isSaved) {
      localStorage.removeItem(`saved_${itemType}_${itemId}`);
      const savedList = JSON.parse(localStorage.getItem("savedItems") || "[]");
      const filtered = savedList.filter((item: any) => item.id !== itemId);
      localStorage.setItem("savedItems", JSON.stringify(filtered));
      setIsSaved(false);
    } else {
      localStorage.setItem(`saved_${itemType}_${itemId}`, "true");
      const savedList = JSON.parse(localStorage.getItem("savedItems") || "[]");
      savedList.push({ id: itemId, title: itemTitle, type: itemType });
      localStorage.setItem("savedItems", JSON.stringify(savedList));
      setIsSaved(true);
    }
  };

  return (
    <button
      onClick={toggleSave}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        isSaved 
          ? "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200" 
          : "bg-purple-600 text-white hover:bg-purple-700"
      }`}
    >
      {isSaved ? (
        <>
          <BookmarkCheck className="w-4 h-4" />
          <span>Saved to Library</span>
        </>
      ) : (
        <>
          <Bookmark className="w-4 h-4" />
          <span>Save for Later</span>
        </>
      )}
    </button>
  );
}