"use client";

import { Paperclip } from "lucide-react";
import {
  useId,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  CONCIERGE_FORM,
  HELP_CATEGORIES,
  TOPIC_LABELS,
  type ContactTopicId,
} from "@/lib/contact/constants";
import { cn } from "@/lib/cn";

import {
  attachHint,
  attachLabel,
  attachZone,
  fieldGroup,
  fieldHint,
  fieldInput,
  fieldLabel,
  fieldLabelTextarea,
  fieldSelect,
  fieldTextarea,
  formDescription,
  formEyebrow,
  formFields,
  formHeading,
  formShell,
  formSubmit,
  formSubmitArrow,
  formSuccess,
  formSuccessBody,
  formSuccessTitle,
} from "./contact.styles";

type ConciergeFormProps = {
  topic: ContactTopicId;
  onTopicChange: (topic: ContactTopicId) => void;
};

export function ConciergeForm({ topic, onTopicChange }: ConciergeFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;
    setStatus("success");
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  if (status === "success") {
    return (
      <div
        id="speak-with-us"
        data-contact="form"
        className={formShell}
        role="status"
        aria-live="polite"
      >
        <div className={formSuccess}>
          <p className={formEyebrow}>Received</p>
          <h3 className={formSuccessTitle}>{CONCIERGE_FORM.success.title}</h3>
          <p className={formSuccessBody}>{CONCIERGE_FORM.success.body}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="speak-with-us" data-contact="form" className={formShell}>
      <p className={formEyebrow}>{CONCIERGE_FORM.eyebrow}</p>
      <h2 className={formHeading}>{CONCIERGE_FORM.heading}</h2>
      <p className={formDescription}>{CONCIERGE_FORM.description}</p>

      <form className={formFields} onSubmit={onSubmit} noValidate>
        <div className={fieldGroup}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={CONCIERGE_FORM.fields.name.placeholder}
            className={fieldInput}
          />
          <label htmlFor={`${formId}-name`} className={fieldLabel}>
            {CONCIERGE_FORM.fields.name.label}
          </label>
        </div>

        <div className={fieldGroup}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={CONCIERGE_FORM.fields.email.placeholder}
            className={fieldInput}
          />
          <label htmlFor={`${formId}-email`} className={fieldLabel}>
            {CONCIERGE_FORM.fields.email.label}
          </label>
        </div>

        <div className={fieldGroup}>
          <label
            htmlFor={`${formId}-topic`}
            className="mb-2 block font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[rgb(26_26_26/0.48)]"
          >
            {CONCIERGE_FORM.fields.topic.label}
          </label>
          <select
            id={`${formId}-topic`}
            name="topic"
            required
            value={topic}
            onChange={(event) =>
              onTopicChange(event.target.value as ContactTopicId)
            }
            className={cn(fieldSelect, "py-3.5")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23111111' stroke-opacity='0.45' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            }}
          >
            {HELP_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {TOPIC_LABELS[category.id]}
              </option>
            ))}
          </select>
        </div>

        <div className={fieldGroup}>
          <input
            id={`${formId}-order`}
            name="order"
            type="text"
            autoComplete="off"
            placeholder={CONCIERGE_FORM.fields.order.placeholder}
            className={fieldInput}
          />
          <label htmlFor={`${formId}-order`} className={fieldLabel}>
            {CONCIERGE_FORM.fields.order.label}
          </label>
          <p className={fieldHint}>{CONCIERGE_FORM.fields.order.hint}</p>
        </div>

        <div className={fieldGroup}>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={5}
            placeholder={CONCIERGE_FORM.fields.message.placeholder}
            className={fieldTextarea}
          />
          <label htmlFor={`${formId}-message`} className={fieldLabelTextarea}>
            {CONCIERGE_FORM.fields.message.label}
          </label>
        </div>

        <label className={attachZone}>
          <input
            type="file"
            name="attachment"
            accept=".pdf,.jpg,.jpeg,.png,image/jpeg,image/png,application/pdf"
            className="sr-only"
            onChange={onFileChange}
          />
          <Paperclip
            className="h-4 w-4 stroke-[1.25] text-[rgb(168_138_78)]"
            aria-hidden="true"
          />
          <span className={attachLabel}>
            {fileName ?? CONCIERGE_FORM.fields.attachment.placeholder}
          </span>
          <span className={attachHint}>
            {CONCIERGE_FORM.fields.attachment.hint}
          </span>
        </label>

        <button type="submit" className={formSubmit}>
          {CONCIERGE_FORM.submit}
          <span className={formSubmitArrow} aria-hidden="true">
            →
          </span>
        </button>
      </form>
    </div>
  );
}
