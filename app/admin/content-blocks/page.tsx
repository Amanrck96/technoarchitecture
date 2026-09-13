"use client";

import React, { useState, useEffect } from "react";

export default function ContentBlocksAdminPage() {
  const [blocks, setBlocks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const fetchBlocks = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/content-blocks");
      if (res.ok) setBlocks(await res.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  const handleOpenModal = (item: any) => {
    setEditingItem(item);
    setFormData({ title: item.title || "", body: item.body || "" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/admin/content-blocks/${editingItem.key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchBlocks();
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Blocks</h1>
        <p className="text-gray-600 mt-2">Manage static text and configuration across the website.</p>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading content blocks...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block) => (
            <div key={block.key} className="border p-6 rounded-lg bg-white shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-sm text-gray-400 mb-2 uppercase tracking-wide">{block.key}</h3>
                <h4 className="font-semibold text-lg mb-2">{block.title || "No Title"}</h4>
                <p className="text-gray-600 line-clamp-3 text-sm">{block.body}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button onClick={() => handleOpenModal(block)} className="text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-sm transition">
                  Edit Block
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">Edit Content Block</h2>
            <p className="text-gray-500 font-mono text-sm mb-6">{editingItem?.key}</p>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title (Optional depending on block)</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Body / Value</label>
                <textarea rows={6} required name="body" value={formData.body} onChange={handleChange} className="w-full border p-2 rounded font-mono text-sm"></textarea>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
