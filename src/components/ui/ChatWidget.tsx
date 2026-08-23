"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageSquare, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Floating Chat Widget for the AlliedOne AI Assistant.
 * Utilizes the Vercel AI SDK to manage streaming chat state.
 * 
 * @returns {JSX.Element} The rendered ChatWidget component.
 */
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, status, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  /**
   * Updates the input state as the user types.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  /**
   * Handles the submission of the user's message to the AI backend.
   * Prevents submission if the input is empty or the AI is currently loading.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const textToSend = input;
    setInput("");
    sendMessage({ role: "user", parts: [{ type: "text", text: textToSend }] });
  };

  const handleQuickPrompt = (promptText: string) => {
    if (isLoading) return;
    sendMessage({ role: "user", parts: [{ type: "text", text: promptText }] });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] h-[550px] max-h-[85vh] mb-4 md:mb-5 flex flex-col overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/60 bg-white/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#0D3A5C] via-[#155b8c] to-[#2180C0] p-5 pb-6 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl translate-y-1/3 -translate-x-1/4"></div>
              
              <div className="relative flex justify-between items-start text-white">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner overflow-hidden p-1.5">
                      <Image src="/alliedone-mark.svg" alt="AlliedOne Logo" width={32} height={32} className="object-contain" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#155b8c] rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
                      AlliedOne AI
                    </h3>
                    <p className="text-sm text-blue-100/90 font-medium tracking-wide">Business Automation Expert</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-white/90 transition-all"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 space-y-6">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-in fade-in duration-700">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 p-3">
                    <Image src="/alliedone-mark.svg" alt="AlliedOne Logo" width={40} height={40} className="object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">How can we help?</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Ask me about our AI services, digital marketing, or how we can automate your business workflows.
                  </p>
                  
                  {/* Quick Prompts */}
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    <button
                      type="button"
                      onClick={() => handleQuickPrompt("What is AI Automation?")}
                      className="text-xs font-semibold text-[#2180C0] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-blue-100 transition-colors"
                    >
                      What is AI Automation?
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickPrompt("What marketing services do you offer?")}
                      className="text-xs font-semibold text-[#2180C0] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-blue-100 transition-colors"
                    >
                      Marketing Services
                    </button>
                  </div>
                </div>
              )}
              
              {messages.map((m) => {
                const messageText =
                  m.parts && m.parts.length > 0
                    ? m.parts
                        .map((part) => (part.type === "text" ? part.text : ""))
                        .join("")
                    : (m as any).content || "";

                return (
                  <div
                    key={m.id}
                    className={`flex gap-3 items-end ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm mb-1 p-1">
                        <Image src="/alliedone-mark.svg" alt="AlliedOne" width={20} height={20} className="object-contain" />
                      </div>
                    )}
                    
                    <div
                      className={`relative max-w-[80%] px-4 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                        m.role === "user"
                          ? "bg-[#0D3A5C] text-white rounded-2xl rounded-br-sm"
                          : "bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-bl-sm"
                      }`}
                    >
                      {messageText}
                    </div>
                    
                    {m.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mb-1">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                    )}
                  </div>
                );
              })}
              
              {isLoading && (
                <div className="flex gap-3 justify-start items-end">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm mb-1 p-1">
                    <Image src="/alliedone-mark.svg" alt="AlliedOne" width={20} height={20} className="object-contain" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-4 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#2180C0]/60 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#2180C0]/60 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#2180C0]/60 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="p-4 bg-white/80 border-t border-slate-100 backdrop-blur-md">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask anything..."
                  className="w-full bg-slate-100/80 border border-slate-200/80 rounded-full pl-5 pr-12 py-3.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2180C0]/40 focus:bg-white transition-all shadow-inner"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input?.trim()}
                  className="absolute right-1.5 w-10 h-10 flex items-center justify-center bg-[#2180C0] text-white rounded-full hover:bg-[#1A5C8A] transition-colors disabled:opacity-50 disabled:bg-slate-300 shadow-sm"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Powered by AlliedOne AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-16 h-16 rounded-full focus:outline-none"
        aria-label="Toggle chat window"
      >
        {/* Animated glowing ring */}
        <div className="absolute inset-0 bg-[#0ea5e9] rounded-full blur-md opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500 animate-pulse"></div>
        
        {/* Main button body */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2180C0] to-[#0ea5e9] rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border-2 border-white/90">
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageSquare className="w-7 h-7 text-white" />
          )}
        </div>
      </button>
    </div>
  );
}
