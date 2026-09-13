"use client";

import React, { useState, useEffect } from "react";
import ImageUpload from "@/components/ui/ImageUpload";

export default function TeamAdminPage() {
  const [team, setTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    photoUrl: "",
    order: 0,
  });

  const fetchTeam = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/team");
      if (res.ok) {
        const data = await res.json();
        setTeam(data);
      }
    } catch (error) {
      console.error("Failed to fetch team members", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({
        name: "",
        role: "",
        bio: "",
        photoUrl: "",
        order: 0,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (url: string) => {
    setFormData((prev) => ({ ...prev, photoUrl: url }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingItem ? "PUT" : "POST";
      const url = editingItem ? `/api/admin/team/${editingItem.id}` : "/api/admin/team";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        fetchTeam();
        handleCloseModal();
      } else {
        alert("Failed to save team member");
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) return;
    try {
      const res = await fetch(`/api/admin/team/${id}`, { method: "DELETE" });
      if (res.ok) fetchTeam();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Add Team Member
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading team...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.length === 0 ? (
            <div className="col-span-full text-gray-500 py-8 text-center">No team members found.</div>
          ) : (
            team.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center bg-white shadow-sm hover:shadow-md transition">
                <img src={member.photoUrl || '/placeholder-user.jpg'} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 bg-gray-100" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                <div className="flex gap-4 mt-auto">
                  <button onClick={() => handleOpenModal(member)} className="text-gray-600 hover:text-gray-900 text-sm border px-3 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(member.id)} className="text-red-500 hover:text-red-700 text-sm border px-3 py-1 rounded border-red-200">Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit Team Member" : "Add Team Member"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input required type="text" name="role" value={formData.role} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                <ImageUpload onUpload={handleImageUpload} value={formData.photoUrl} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea rows={4} name="bio" value={formData.bio} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <input type="number" name="order" value={formData.order} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 border rounded text-gray-600">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
