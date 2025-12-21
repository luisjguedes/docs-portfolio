// docs/javascripts/mermaid-init.js
(function () {
  function isDarkMode() {
    // Material palette (slate) OR OS preference
    return (
      document.body.getAttribute("data-md-color-scheme") === "slate" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function renderMermaid() {
    if (!window.mermaid) return;

    const dark = isDarkMode();

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: dark ? "dark" : "default",
      themeVariables: {
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        fontSize: "14px",

        primaryColor: dark ? "#0f172a" : "#ffffff",
        primaryTextColor: dark ? "#e5e7eb" : "#0f172a",
        primaryBorderColor: dark ? "#334155" : "#cbd5e1",

        lineColor: dark ? "#94a3b8" : "#64748b",

        clusterBkg: dark ? "#0b1220" : "#f8fafc",
        clusterBorder: dark ? "#334155" : "#cbd5e1",
      },
      flowchart: {
        curve: "basis",
        nodeSpacing: 50,
        rankSpacing: 50,
        padding: 12,
      },
    });

    // Re-hydrate Mermaid blocks
    document.querySelectorAll(".mermaid").forEach((el) => {
      const code = el.textContent;
      el.removeAttribute("data-processed");
      el.innerHTML = code;
    });

    window.mermaid.run({ querySelector: ".mermaid" });
  }

  // Initial page load
  document.addEventListener("DOMContentLoaded", renderMermaid);

  // MkDocs Material instant navigation hook (this is the key)
  // Fires after each page change when navigation.instant is enabled
  document.addEventListener("document$", renderMermaid);

  // Optional: if user toggles light/dark, re-render diagrams
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-md-component='palette']")) {
      // slight delay so Material applies the new scheme attribute
      setTimeout(renderMermaid, 50);
    }
  });
})();
