import { useState, useEffect } from "react";

const theme = {
  bg: "#F5F6F8",
  card: "#FFFFFF",
  text: "#0F1B2D",
  textSecondary: "#5A6578",
  textMuted: "#9CA3AF",
  border: "#E2E5EB",
  accent: "#0D4F4F",
  accentDark: "#093939",
  accentLight: "#E0F2F1",
  accentSoft: "#EBF5F5",
  accentGlow: "#14B8A6",
  warning: "#D97706",
  danger: "#B91C1C",
  gradientStart: "#0D4F4F",
  gradientEnd: "#14706E",
};

const CheckIcon = ({ color = "#0D4F4F" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PhoneMockup = () => (
  <div style={{
    width: 260, height: 520, borderRadius: 36, border: "8px solid #0F1B2D",
    background: theme.bg, overflow: "hidden",
    boxShadow: "0 40px 80px rgba(13,79,79,0.2), 0 16px 32px rgba(0,0,0,0.1)",
    position: "relative", flexShrink: 0,
  }}>
    <div style={{ width: 100, height: 24, background: "#0F1B2D", borderRadius: "0 0 16px 16px", margin: "0 auto", position: "relative", zIndex: 10 }} />
    <div style={{ padding: "12px 16px", fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{
        fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 700,
        letterSpacing: "1px", color: theme.accent, marginBottom: 12, textTransform: "uppercase",
      }}>
        SLMM FLOW
      </div>
      <div style={{
        background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`,
        borderRadius: 14, padding: "18px 16px", color: "#fff", marginBottom: 12,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -15, right: -15, width: 60, height: 60, borderRadius: 30, background: "rgba(255,255,255,0.05)" }} />
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", opacity: 0.9, marginBottom: 6 }}>
          ✓ You're on track
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-1px", lineHeight: 1 }}>$1,247</div>
        <div style={{ fontSize: 9, opacity: 0.7, marginTop: 4 }}>safe to spend · 12 days left</div>
        <div style={{ marginTop: 10, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)" }}>
          <div style={{ width: "62%", height: "100%", borderRadius: 2, background: "rgba(255,255,255,0.6)" }} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {[
          { val: "$41", label: "PER DAY", color: theme.accent },
          { val: "$983", label: "SPENT", color: theme.warning },
          { val: "$1,650", label: "BILLS", color: theme.textSecondary },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, background: "#fff", border: `1px solid ${theme.border}`,
            borderRadius: 10, padding: "10px 6px", textAlign: "center",
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: 7, fontWeight: 700, color: theme.textMuted, letterSpacing: "0.5px", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 8, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 }}>
        Upcoming Bills
      </div>
      {[
        { name: "Rent", amount: "$1,200", due: "Due on 1st" },
        { name: "Car Insurance", amount: "$186", due: "Due on 5th" },
        { name: "Phone", amount: "$85", due: "Due on 12th" },
      ].map((b, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "8px 10px", background: "#fff", border: `1px solid ${theme.border}`,
          borderRadius: 8, marginBottom: 4,
        }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600 }}>{b.name}</div>
            <div style={{ fontSize: 8, color: theme.textMuted }}>{b.due}</div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: theme.danger }}>{b.amount}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      background: theme.bg, color: theme.text, minHeight: "100vh", overflow: "hidden",
    }}>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: ${theme.bg}; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        button:active { transform: scale(0.97) !important; }
        input:focus { outline: none; border-color: ${theme.accent} !important; }
        input::placeholder { color: ${theme.textMuted}; }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 28px", maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{
          fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 700,
          letterSpacing: "1px", color: theme.accent, textTransform: "uppercase",
        }}>
          SLMM FLOW
        </div>
        <button style={{
          padding: "10px 24px", fontSize: 14, fontWeight: 700,
          background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
          color: "#fff", border: "none", borderRadius: 10, cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Get Started — Free
        </button>
      </nav>

      {/* HERO */}
      <section style={{
        maxWidth: 1100, margin: "0 auto",
        padding: isMobile ? "40px 28px 60px" : "80px 28px 100px",
        display: "flex", flexDirection: isMobile ? "column" : "row",
        alignItems: "center", gap: isMobile ? 48 : 64,
      }}>
        <div style={{ flex: 1, animation: "fadeUp 0.8s ease" }}>
          <div style={{
            display: "inline-block", padding: "6px 14px", background: theme.accentSoft,
            borderRadius: 20, fontSize: 13, fontWeight: 600, color: theme.accent, marginBottom: 20,
          }}>
            Free forever · No bank login required
          </div>

          <h1 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: isMobile ? 42 : 56, fontWeight: 700,
            lineHeight: 1.05, letterSpacing: "-1px", color: theme.text, marginBottom: 20,
            textTransform: "uppercase",
          }}>
            Stop budgeting.<br />
            <span style={{ color: theme.accent }}>Start knowing.</span>
          </h1>

          <p style={{
            fontSize: 18, lineHeight: 1.6, color: theme.textSecondary, marginBottom: 32, maxWidth: 480,
          }}>
            SLMM FLOW doesn't make you categorize every coffee. It answers the only question that matters:{" "}
            <strong style={{ color: theme.text }}>"Am I going to be okay this month?"</strong>
          </p>

          {!submitted ? (
            <div style={{ display: "flex", gap: 10, flexDirection: isMobile ? "column" : "row", maxWidth: 440 }}>
              <input
                type="email" placeholder="Enter your email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                style={{
                  flex: 1, padding: "16px 18px", fontSize: 16,
                  border: `2px solid ${theme.border}`, borderRadius: 12,
                  background: "#fff", color: theme.text, fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <button onClick={handleSubmit} style={{
                padding: "16px 28px", fontSize: 16, fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd})`,
                color: "#fff", border: "none", borderRadius: 12, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap",
              }}>
                Get early access <ArrowIcon />
              </button>
            </div>
          ) : (
            <div style={{
              padding: "18px 24px", background: theme.accentLight, borderRadius: 12,
              fontSize: 16, fontWeight: 600, color: theme.accentDark,
              display: "flex", alignItems: "center", gap: 10, maxWidth: 440,
              animation: "fadeIn 0.4s ease",
            }}>
              <CheckIcon /> You're on the list. We'll be in touch soon.
            </div>
          )}
          <div style={{ marginTop: 20, fontSize: 13, color: theme.textMuted }}>
            No credit card required · Works on any phone
          </div>
        </div>

        <div style={{ animation: "fadeUp 1s ease 0.2s both", display: "flex", justifyContent: "center" }}>
          <div style={{ animation: "float 6s ease-in-out infinite" }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{
        background: theme.card, borderTop: `1px solid ${theme.border}`,
        borderBottom: `1px solid ${theme.border}`, padding: "28px 28px",
      }}>
        <div style={{
          maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "center",
          alignItems: "center", gap: isMobile ? 24 : 48, flexWrap: "wrap", textAlign: "center",
        }}>
          {[
            { val: "60 sec", label: "Setup time" },
            { val: "$0", label: "To start" },
            { val: "Zero", label: "Bank logins needed" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <div style={{ width: 1, height: 40, background: theme.border, marginRight: isMobile ? 24 : 48 }} />}
              <div>
                <div style={{ fontSize: 28, fontWeight: 800, color: theme.accent }}>{item.val}</div>
                <div style={{ fontSize: 12, color: theme.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: isMobile ? "60px 28px" : "100px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12,
          }}>
            How it works
          </h2>
          <p style={{ fontSize: 17, color: theme.textSecondary, maxWidth: 500, margin: "0 auto" }}>
            Three taps and you know where you stand. Every day.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 20 }}>
          {[
            { step: "01", title: "Tell us your income", desc: "How much you take home and how often. That's it. No bank login, no SSN, no anxiety." },
            { step: "02", title: "Add your bills", desc: "Rent, car, phone — the stuff that's non-negotiable. SLMM FLOW subtracts it automatically." },
            { step: "03", title: "Check your flow", desc: "Open the app anytime and instantly see how much you can safely spend today. Green means go. Orange means slow down." },
          ].map((item, i) => (
            <div key={i} style={{
              flex: 1, padding: "32px 24px", background: theme.card,
              borderRadius: 20, border: `1px solid ${theme.border}`,
            }}>
              <div style={{
                fontFamily: "'Oswald', sans-serif", fontSize: 40, fontWeight: 700,
                color: theme.accentLight, marginBottom: 12,
              }}>
                {item.step}
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: 15, color: theme.textSecondary, lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{
        background: theme.card, borderTop: `1px solid ${theme.border}`,
        borderBottom: `1px solid ${theme.border}`,
        padding: isMobile ? "60px 28px" : "100px 28px",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "'Oswald', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12,
            }}>
              Not another budgeting app
            </h2>
            <p style={{ fontSize: 17, color: theme.textSecondary }}>
              We killed everything you hate about finance apps.
            </p>
          </div>

          {[
            { theirs: "30 minutes to set up", ours: "60 seconds" },
            { theirs: "Requires bank login", ours: "No login needed" },
            { theirs: "Categorize every transaction", ours: "Just log the amount" },
            { theirs: "Charts and graphs you'll never read", ours: "One number: safe to spend" },
            { theirs: "Feels like homework", ours: "Feels like checking the weather" },
          ].map((row, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", padding: "18px 0",
              borderBottom: i < 4 ? `1px solid ${theme.border}` : "none", gap: 16,
            }}>
              <div style={{ flex: 1, fontSize: 15, color: theme.textMuted, textDecoration: "line-through" }}>{row.theirs}</div>
              <CheckIcon />
              <div style={{ flex: 1, fontSize: 15, fontWeight: 700, color: theme.text }}>{row.ours}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: isMobile ? "60px 28px" : "100px 28px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: isMobile ? 32 : 40, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12,
          }}>
            Simple pricing
          </h2>
          <p style={{ fontSize: 17, color: theme.textSecondary }}>
            Start free. Upgrade when you want a cleaner experience.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 20, justifyContent: "center" }}>
          {/* Free tier */}
          <div style={{
            flex: 1, maxWidth: 360, padding: "36px 28px", background: theme.card,
            borderRadius: 20, border: `2px solid ${theme.border}`,
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: theme.textMuted, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>
              Free
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-2px" }}>$0</span>
              <span style={{ fontSize: 16, color: theme.textMuted }}>/forever</span>
            </div>
            <div style={{ fontSize: 15, color: theme.textSecondary, marginBottom: 28 }}>
              Everything you need to find your flow.
            </div>
            {["Daily safe-to-spend number", "Bill tracking & reminders", "Quick expense logging", "Monthly breakdown", "Ad-supported"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: theme.textSecondary }}>{f}</span>
              </div>
            ))}
            <button style={{
              width: "100%", padding: "16px", marginTop: 24, fontSize: 16, fontWeight: 700,
              background: "transparent", color: theme.accent, border: `2px solid ${theme.accent}`,
              borderRadius: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            }}>
              Start Free
            </button>
          </div>

          {/* Premium tier */}
          <div style={{
            flex: 1, maxWidth: 360, padding: "36px 28px",
            background: `linear-gradient(160deg, ${theme.accentDark} 0%, ${theme.accent} 100%)`,
            borderRadius: 20, color: "#fff", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 16, right: 16, background: theme.warning, color: "#fff",
              fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20,
              textTransform: "uppercase", letterSpacing: "0.5px",
            }}>
              Popular
            </div>
            <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: 60, background: "rgba(255,255,255,0.04)" }} />
            <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>
              Premium
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-2px" }}>$4.99</span>
              <span style={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }}>/month</span>
            </div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 28 }}>
              No ads. More power. Total clarity.
            </div>
            {["Everything in Free", "No advertisements", "Spending insights & trends", "Weekly email summary", "Priority support"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                <CheckIcon color="#A7F3D0" />
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>{f}</span>
              </div>
            ))}
            <button style={{
              width: "100%", padding: "16px", marginTop: 24, fontSize: 16, fontWeight: 700,
              background: "#fff", color: theme.accentDark, border: "none",
              borderRadius: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            }}>
              Start Free, Upgrade Anytime
            </button>
            <div style={{ textAlign: "center", marginTop: 12, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              or $39.99/year (save 33%)
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`,
        padding: isMobile ? "60px 28px" : "80px 28px", textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Oswald', sans-serif", fontSize: isMobile ? 32 : 44, fontWeight: 700,
          color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16,
        }}>
          You deserve to know<br />where you stand
        </h2>
        <p style={{
          fontSize: 18, color: "rgba(255,255,255,0.7)",
          maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.5,
        }}>
          No more guessing. No more anxiety at the register. Just open SLMM FLOW and know.
        </p>
        <button style={{
          padding: "18px 40px", fontSize: 17, fontWeight: 700, background: "#fff",
          color: theme.accentDark, border: "none", borderRadius: 14, cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif", display: "inline-flex", alignItems: "center", gap: 10,
        }}>
          Get SLMM FLOW — It's Free <ArrowIcon />
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 28px", textAlign: "center", borderTop: `1px solid ${theme.border}` }}>
        <div style={{
          fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 700,
          letterSpacing: "1px", color: theme.accent, textTransform: "uppercase", marginBottom: 8,
        }}>
          SLMM FLOW
        </div>
        <div style={{ fontSize: 13, color: theme.textMuted }}>
          © {new Date().getFullYear()} SLMM FLOW. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
