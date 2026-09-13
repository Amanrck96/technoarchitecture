"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function RecognitionsAdminPage() {
  const [recognitions, setRecognitions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    issuingBody: "",
    link: "",
    imageUrl: "",
  });

  const fetchRecognitions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/recognitions");
      if (res.ok) setRecognitions(await res.json());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecognitions();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({ title: "", year: "", issuingBody: "", link: "", imageUrl: "" });
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
      const res = await fetch("/api/admin/recognitions", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem ? { ...formData, id: editingItem.id } : formData),
      });
      if (res.ok) {
        fetchRecognitions();
        handleCloseModal();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to save recognition");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/admin/recognitions?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchRecognitions();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete recognition");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Awards & Recognitions</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded">
          Add Award
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading recognitions...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recognitions.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg bg-white shadow-sm flex items-start gap-4">
              {item.imageUrl ? (
                <img src={item.imageUrl} className="w-20 h-20 object-contain bg-gray-50 rounded" />
              ) : (
                <div className="w-20 h-20 bg-gray-100 rounded"></div>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.issuingBody} - {item.year}</p>
                {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="text-blue-500 text-sm hover:underline mt-1 inline-block">View Link</a>}
                <div className="flex gap-3 mt-4">
                  <button onClick={() => handleOpenModal(item)} className="text-gray-600 text-sm">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Award" : "Add Award"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Year</label>
                  <input required type="text" name="year" value={formData.year} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Issuing Body</label>
                  <input required type="text" name="issuingBody" value={formData.issuingBody} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Link (Optional)</label>
                <input type="url" name="link" value={formData.link} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image/Logo</label>
                <ImageUpload onUpload={(url) => setFormData(p => ({...p, imageUrl: url}))} value={formData.imageUrl} />
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
