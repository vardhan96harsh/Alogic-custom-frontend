import { useState } from "react";
import { createPortal } from "react-dom";
import {
  Calendar,
  X,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MailAPI } from "@/lib/api";

type ScheduleMeetingDialogProps = {
  buttonText?: string;
};

export function ScheduleMeetingDialog({
  buttonText = "Get LMS Demo",
}: ScheduleMeetingDialogProps) {
  const [open, setOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !company || !date || !time) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await MailAPI.sendDemoRequest({
        name: fullName,
        email,
        organization: company,
        date,
        time,
        message,
      });

      alert("Your demo request has been sent!");

      setFullName("");
      setPhone("");
      setEmail("");
      setCompany("");
      setDate("");
      setTime("");
      setMessage("");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to send demo request. Please try again.");
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="text-primary-foreground border-0 shadow-[var(--shadow-soft)] text-xs lg:text-lg"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <Calendar className="lg:mr-2 h-4 w-4" />
        {buttonText}
      </Button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-6 sm:items-center">
            <div className="relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl max-h-[calc(100vh-48px)] overflow-y-auto">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 pr-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Schedule a Meeting
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill your details and our team will contact you shortly.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Company / Organization"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />

                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    placeholder="Meeting Purpose / Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="text-primary-foreground border-0"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}