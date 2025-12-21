// docs/javascripts/mermaid-init.js
(function () {
  function isDarkMode() {
    // Material adds a data attribute when palette is active; this is a safe fallback:
    return document.body.getAttribute("data-md-color-scheme") === "slate"
      || window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function initMermaid() {
    if (!window.mermaid) return;

    const dark = isDarkMode();

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: dark ? "dark" : "default",

      // Make it feel closer to “Material”
      themeVariables: {
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        fontSize: "14px",

        // A little polish on nodes/edges
        primaryColor: dark ? "#1f2937" : "#ffffff",
        primaryTextColor: dark ? "#e5e7eb" : "#111827",
        primaryBorderColor: dark ? "#334155" : "#cbd5e1",

        lineColor: dark ? "#94a3b8" : "#64748b",

        // Flowchart specifics
        clusterBkg: dark ? "#0b1220" : "#f8fafc",
        clusterBorder: dark ? "#334155" : "#cbd5e1",
      },

      flowchart: {
        curve: "basis",
        nodeSpacing: 50,
        rankSpacing: 50,
        padding: 12,
      },

      sequence: { actorMargin: 50 },
    });

    // Render all Mermaid fences on the page
    document.querySelectorAll(".mermaid").forEach((el) => {
      const code = el.textContent;
      el.removeAttribute("data-processed");
      el.innerHTML = code;
    });

    window.mermaid.run({ querySelector: ".mermaid" });
  }

  // Run on initial load…
  document.addEventListener("DOMContentLoaded", initMermaid);

  // …and on Material’s instant navigation (important!)
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", initMermaid);
  });

  // Material uses "navigation.instant" → re-render on page changes:
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", initMermaid);
  });

  // Best hook for Material instant navigation:
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("md-content-updated", initMermaid);
  });

  // In case md-content-updated isn’t firing (older setups):
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("navigation:load", initMermaid);
  });
})();
