"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function GalleryAdminPage() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    imageUrl: "",
    category: "",
    caption: "",
  });

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/gallery");
      if (res.ok) setImages(await res.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({ imageUrl: "", category: "", caption: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingItem ? "PUT" : "POST";
      const url = editingItem ? `/api/admin/gallery/${editingItem.id}` : "/api/admin/gallery";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        fetchGallery();
        handleCloseModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" });
      if (res.ok) fetchGallery();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded">
          Add Image
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading gallery...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative group rounded overflow-hidden shadow-sm bg-gray-100">
              <img src={img.imageUrl} alt={img.caption} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-xs text-white uppercase tracking-wider mb-1">{img.category}</span>
                <p className="text-white text-sm line-clamp-2 mb-3">{img.caption}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleOpenModal(img)} className="bg-white/20 hover:bg-white/40 text-white px-2 py-1 text-xs rounded">Edit</button>
                  <button onClick={() => handleDelete(img.id)} className="bg-red-500/80 hover:bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Image" : "Add Image"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Image Upload</label>
                <ImageUpload onUpload={(url) => setFormData(p => ({...p, imageUrl: url}))} value={formData.imageUrl} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category Tag</label>
                <input required type="text" name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded" placeholder="e.g. Exterior, Interior, Sketch" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Caption</label>
                <input type="text" name="caption" value={formData.caption} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
