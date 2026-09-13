"use client";

import React, { useState, useEffect } from "react";

export default function FaqAdminPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    order: 0,
  });

  const defaultFaqs = [
    {
      id: 'placeholder-faq-1',
      question: 'What types of projects does Techno Architecture undertake?',
      answer: 'We work across residential, commercial, institutional, and mixed-use developments. From bespoke private residences to large-scale commercial complexes, we bring the same rigour and creativity to every brief.',
      order: 1,
    },
    {
      id: 'placeholder-faq-2',
      question: 'How do I start a project with Techno Architecture?',
      answer: 'Begin by reaching out through our contact page. We will schedule an initial consultation to understand your vision, site, and brief. From there, we develop a proposal outlining scope, timeline, and fees.',
      order: 2,
    },
    {
      id: 'placeholder-faq-3',
      question: 'What is your design process?',
      answer: 'Our process moves through concept design, design development, documentation, and construction administration. We maintain close collaboration with clients at every stage to ensure the final outcome reflects the original vision.',
      order: 3,
    },
  ];

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/faq");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data);
        } else {
          setFaqs(defaultFaqs);
        }
      } else {
        setFaqs(defaultFaqs);
      }
    } catch (error) {
      console.error(error);
      setFaqs(defaultFaqs);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ ...item });
    } else {
      setEditingItem(null);
      setFormData({ question: "", answer: "", order: 0 });
    }
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
      const method = editingItem ? "PUT" : "POST";
      const res = await fetch("/api/admin/faq", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem ? { ...formData, id: editingItem.id } : formData),
      });
      if (res.ok) {
        fetchFaqs();
        handleCloseModal();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to save FAQ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/admin/faq?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchFaqs();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete FAQ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">FAQ Management</h1>
        <button onClick={() => handleOpenModal()} className="bg-gray-900 text-white px-4 py-2 rounded">
          Add FAQ
        </button>
      </div>

      {loading ? (
        <div className="text-gray-600">Loading FAQs...</div>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border p-4 rounded-lg bg-white shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600 mb-4">{faq.answer}</p>
              <div className="flex gap-3">
                <button onClick={() => handleOpenModal(faq)} className="text-gray-600 text-sm border px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(faq.id)} className="text-red-500 text-sm border px-3 py-1 rounded border-red-200">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{editingItem ? "Edit FAQ" : "Add FAQ"}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Question</label>
                <input required type="text" name="question" value={formData.question} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Answer</label>
                <textarea rows={4} required name="answer" value={formData.answer} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input type="number" name="order" value={formData.order} onChange={handleChange} className="w-full border p-2 rounded" />
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
