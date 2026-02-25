"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Calendar,
  User,
  Sparkles,
  Phone,
  Clock,
} from "lucide-react";

const services = [
  {
    category: "Waxing",
    items: [
      { name: "Brazilian Wax", price: 57, duration: "30 min" },
      { name: "New Client Brazilian", price: 40, duration: "45 min" },
      { name: "Bikini Full", price: 50, duration: "20 min" },
      { name: "Full Face", price: 50, duration: "25 min" },
      { name: "Brow Wax", price: 18, duration: "15 min" },
      { name: "Upper Lip", price: 15, duration: "10 min" },
      { name: "Chin", price: 15, duration: "10 min" },
      { name: "Underarm Wax", price: 25, duration: "15 min" },
      { name: "Full Leg", price: 80, duration: "45 min" },
      { name: "Half Leg", price: 50, duration: "25 min" },
      { name: "Full Arm", price: 55, duration: "30 min" },
      { name: "Half Arm", price: 35, duration: "20 min" },
      { name: "Back", price: 65, duration: "35 min" },
      { name: "Chest", price: 45, duration: "25 min" },
      { name: "Stomach", price: 30, duration: "15 min" },
    ],
  },
  {
    category: "Lashes & Brows",
    items: [
      { name: "Lash Lift", price: 55, duration: "45 min" },
      { name: "Lash Lift + Tint", price: 70, duration: "60 min" },
      { name: "Lash Tint", price: 25, duration: "20 min" },
      { name: "Brow Lamination", price: 55, duration: "45 min" },
      { name: "Brow Lamination + Wax + Tint", price: 70, duration: "60 min" },
      { name: "Brow Tint", price: 20, duration: "15 min" },
      { name: "Lash + Brow Combo", price: 125, duration: "90 min" },
    ],
  },
  {
    category: "Skin Treatments",
    items: [
      { name: "Facial", price: 85, duration: "60 min" },
      { name: "Dermaplaning", price: 95, duration: "45 min" },
      { name: "Chemical Peel", price: 125, duration: "45 min" },
      { name: "Lip Blush", price: 200, duration: "120 min" },
    ],
  },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const stepsConfig = [
  { label: "Service", icon: <Sparkles size={18} /> },
  { label: "Date & Time", icon: <Calendar size={18} /> },
  { label: "Your Info", icon: <User size={18} /> },
  { label: "Confirm", icon: <Check size={18} /> },
];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const allItems = services.flatMap((cat) => cat.items);
  const selectedItems = allItems.filter((item) =>
    selectedServices.includes(item.name)
  );
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const canProceed = () => {
    switch (step) {
      case 0: return selectedServices.length > 0;
      case 1: return selectedDate !== "" && selectedTime !== "";
      case 2: return formData.firstName !== "" && formData.lastName !== "" && formData.phone !== "";
      default: return true;
    }
  };

  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  }).filter((d) => d.getDay() !== 0);

  if (submitted) {
    return (
      <>
        <PageHero badge="Booking" title="Booking Confirmed!" />
        <section className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={40} className="text-success" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-accent mb-4">
              Thank You, {formData.firstName}!
            </h2>
            <p className="text-accent/60 text-lg mb-8 leading-relaxed">
              Your appointment request has been received. Erika will confirm your
              booking via text or email within a few hours.
            </p>
            <div className="bg-secondary rounded-2xl p-8 text-left space-y-4 mb-8">
              <h3 className="font-heading text-lg font-bold text-accent">
                Appointment Summary
              </h3>
              <div className="space-y-2">
                {selectedItems.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span className="text-accent/70">{item.name}</span>
                    <span className="font-semibold text-accent">${item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-highlight/50 pt-3 flex justify-between">
                <span className="font-semibold text-accent">Total</span>
                <span className="font-heading text-xl font-bold text-primary">${totalPrice}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-accent/60 pt-2">
                <Calendar size={16} />
                <span>{selectedDate} at {selectedTime}</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-accent/50 text-sm">
              <Phone size={16} />
              <span>
                Questions? Call{" "}
                <a href="tel:+14177662102" className="text-primary font-semibold">(417) 766-2102</a>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        badge="Book Online"
        title="Book Your Appointment"
        subtitle="Choose your services, pick a time, and we'll take care of the rest."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
            {stepsConfig.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <button
                  onClick={() => i < step && setStep(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    i === step
                      ? "bg-primary text-white"
                      : i < step
                      ? "bg-success/10 text-success cursor-pointer"
                      : "bg-secondary text-accent/40"
                  }`}
                  disabled={i > step}
                >
                  {i < step ? <Check size={16} /> : s.icon}
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {i < stepsConfig.length - 1 && (
                  <ChevronRight size={16} className="mx-1 sm:mx-2 text-accent/20" />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Service Selection */}
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-accent mb-2">Choose Your Services</h2>
              <p className="text-accent/50 mb-8">Select one or more services for your visit.</p>

              {services.map((category) => (
                <div key={category.category} className="mb-10">
                  <h3 className="font-heading text-lg font-bold text-accent mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.items.map((item) => {
                      const isSelected = selectedServices.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          onClick={() => toggleService(item.name)}
                          className={`flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-highlight/50 hover:border-primary/30"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected ? "border-primary bg-primary" : "border-accent/20"
                            }`}>
                              {isSelected && <Check size={12} className="text-white" />}
                            </div>
                            <div>
                              <p className="font-medium text-accent text-sm">{item.name}</p>
                              <p className="text-accent/40 text-xs flex items-center gap-1">
                                <Clock size={10} /> {item.duration}
                              </p>
                            </div>
                          </div>
                          <span className="font-heading font-bold text-primary">${item.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {selectedServices.length > 0 && (
                <div className="sticky bottom-4 bg-white/95 backdrop-blur-md border border-highlight/50 rounded-xl p-4 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-accent/50 text-sm">{selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected</p>
                    <p className="font-heading text-xl font-bold text-primary">${totalPrice}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2">
                    Continue <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-accent mb-2">Pick a Date & Time</h2>
              <p className="text-accent/50 mb-8">Choose a day and time that works for you.</p>

              <div className="mb-10">
                <h3 className="font-semibold text-accent mb-4">Available Dates</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
                  {dates.map((date) => {
                    const dateStr = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
                    const isSelected = selectedDate === dateStr;
                    const isSaturday = date.getDay() === 6;
                    return (
                      <button
                        key={dateStr}
                        onClick={() => { setSelectedDate(dateStr); setSelectedTime(""); }}
                        className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                          isSelected ? "border-primary bg-primary/5" : "border-highlight/50 hover:border-primary/30"
                        }`}
                      >
                        <p className="text-xs text-accent/50 uppercase">{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <p className="font-bold text-accent mt-1">{date.getDate()}</p>
                        <p className="text-xs text-accent/40">{date.toLocaleDateString("en-US", { month: "short" })}</p>
                        {isSaturday && <p className="text-xs text-primary mt-1">Until 2pm</p>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <h3 className="font-semibold text-accent mb-4">Available Times</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                    {timeSlots.filter((slot) => {
                      if (selectedDate.startsWith("Sat") && (slot.includes("2:30") || slot.includes("3:") || slot.includes("4:"))) return false;
                      return true;
                    }).map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                          selectedTime === slot
                            ? "border-primary bg-primary text-white"
                            : "border-highlight/50 text-accent/70 hover:border-primary/30"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Client Info */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-accent mb-2">Your Information</h2>
              <p className="text-accent/50 mb-8">Tell us a bit about yourself so we can prepare for your visit.</p>

              <div className="space-y-6 max-w-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-accent mb-1.5">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-highlight/50 focus:border-primary outline-none transition-colors bg-white"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-accent mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-highlight/50 focus:border-primary outline-none transition-colors bg-white"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-highlight/50 focus:border-primary outline-none transition-colors bg-white"
                    placeholder="(417) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent mb-1.5">Email (optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-highlight/50 focus:border-primary outline-none transition-colors bg-white"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-accent mb-1.5">Notes (optional)</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-highlight/50 focus:border-primary outline-none transition-colors bg-white resize-none"
                    placeholder="Anything we should know? First time? Skin sensitivities?"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl font-bold text-accent mb-2">Review & Confirm</h2>
              <p className="text-accent/50 mb-8">Make sure everything looks good before submitting.</p>

              <div className="bg-secondary rounded-2xl p-8 space-y-6 max-w-xl">
                {/* Services */}
                <div>
                  <h3 className="font-semibold text-accent mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" /> Services
                  </h3>
                  <div className="space-y-2">
                    {selectedItems.map((item) => (
                      <div key={item.name} className="flex justify-between text-sm">
                        <span className="text-accent/70">{item.name} <span className="text-accent/40">({item.duration})</span></span>
                        <span className="font-semibold text-accent">${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-highlight/50 mt-3 pt-3 flex justify-between">
                    <span className="font-semibold text-accent">Total</span>
                    <span className="font-heading text-xl font-bold text-primary">${totalPrice}</span>
                  </div>
                </div>

                {/* Date & Time */}
                <div>
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <Calendar size={16} className="text-primary" /> Date & Time
                  </h3>
                  <p className="text-accent/70 text-sm">{selectedDate} at {selectedTime}</p>
                </div>

                {/* Client */}
                <div>
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <User size={16} className="text-primary" /> Your Info
                  </h3>
                  <div className="text-accent/70 text-sm space-y-1">
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.phone}</p>
                    {formData.email && <p>{formData.email}</p>}
                    {formData.notes && <p className="italic text-accent/50">Note: {formData.notes}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step > 0 && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-highlight/30">
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-accent/60 hover:text-accent font-medium transition-colors"
              >
                <ChevronLeft size={18} /> Back
              </button>

              {step < 3 ? (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                    canProceed()
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-highlight/50 text-accent/30 cursor-not-allowed"
                  }`}
                >
                  Continue <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-200"
                >
                  <Check size={18} /> Confirm Booking
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );

  function handleSubmit() {
    setSubmitted(true);
  }
}
