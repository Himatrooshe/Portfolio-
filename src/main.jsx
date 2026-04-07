import { StrictMode, useEffect, useState, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

function FatalErrorOverlay() {
  const [fatal, setFatal] = useState(null);

  useEffect(() => {
    const onError = (event) => {
      const message =
        event?.error?.message ||
        event?.message ||
        "Unknown runtime error (see console).";
      setFatal({ type: "error", message, stack: event?.error?.stack });
    };

    const onUnhandledRejection = (event) => {
      const reason = event?.reason;
      const message =
        (reason && (reason.message || String(reason))) ||
        "Unhandled promise rejection (see console).";
      setFatal({ type: "unhandledrejection", message, stack: reason?.stack });
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  if (!fatal) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0b1020",
        color: "#fff",
        zIndex: 999999,
        padding: "24px",
        overflow: "auto",
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
          App crashed while rendering
        </div>
        <div style={{ opacity: 0.9, marginBottom: 16 }}>
          {fatal.type}: {fatal.message}
        </div>
        {fatal.stack ? (
          <pre style={{ whiteSpace: "pre-wrap", opacity: 0.85 }}>
            {fatal.stack}
          </pre>
        ) : (
          <div style={{ opacity: 0.75 }}>
            Open DevTools Console for details.
          </div>
        )}
      </div>
    </div>
  );
}

function renderBootstrapError(rootEl, err) {
  const message =
    err && typeof err === "object" && "message" in err ? err.message : String(err);
  const stack = err && typeof err === "object" && "stack" in err ? err.stack : "";

  rootEl.innerHTML = `
    <div style="
      min-height: 100vh;
      background: #0b1020;
      color: #fff;
      padding: 24px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    ">
      <div style="max-width: 980px; margin: 0 auto;">
        <div style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">
          App failed to start
        </div>
        <div style="opacity: 0.9; margin-bottom: 16px;">
          ${message.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}
        </div>
        <pre style="white-space: pre-wrap; opacity: 0.85;">${String(stack || "")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")}</pre>
      </div>
    </div>
  `;
}

// Lenis smooth scroll options
const lenisOptions = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
};

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Root element "#root" not found.');
}

// Install global handlers before app imports, so we never get a white screen.
window.addEventListener("error", (e) => {
  console.error(e.error || e);
});
window.addEventListener("unhandledrejection", (e) => {
  console.error(e.reason || e);
});

const root = createRoot(rootEl);

(async () => {
  try {
    const [{ default: App }, lenisModule] = await Promise.all([
      import("./App.jsx"),
      import("lenis/react").catch(() => null),
    ]);

    const ReactLenis = lenisModule?.ReactLenis;
    const Wrapper = ReactLenis ? ReactLenis : Fragment;
    const wrapperProps = ReactLenis ? { root: true, options: lenisOptions } : {};

    root.render(
      <Wrapper {...wrapperProps}>
        <BrowserRouter>
          <StrictMode>
            <FatalErrorOverlay />
            <App />
          </StrictMode>
        </BrowserRouter>
      </Wrapper>
    );
  } catch (err) {
    console.error(err);
    renderBootstrapError(rootEl, err);
  }
})();
