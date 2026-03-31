import { useState, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Ad soyad zorunludur.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Ad soyad en az 2 karakter olmalıdır.";
  }

  if (!data.email.trim()) {
    errors.email = "E-posta zorunludur.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz.";
  }

  if (!data.subject.trim()) {
    errors.subject = "Konu zorunludur.";
  }

  if (!data.message.trim()) {
    errors.message = "Mesaj zorunludur.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Mesaj en az 10 karakter olmalıdır.";
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gönderim başarısız. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <p className="text-green-800 dark:text-green-300 font-medium">
          ✅ Mesajınız başarıyla gönderildi!
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-600 dark:text-green-400 underline hover:no-underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      errors[field]
        ? "border-red-500 dark:border-red-500"
        : "border-gray-300 dark:border-gray-600"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Ad Soyad */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Ad Soyad
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputClass("name")}
          placeholder="Adınız Soyadınız"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* E-posta */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          E-posta
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClass("email")}
          placeholder="ornek@mail.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Konu */}
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Konu
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={inputClass("subject")}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Mesaj */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Mesaj
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`${inputClass("message")} resize-y`}
          placeholder="Mesajınızı yazınız..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Gönder butonu */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
