// docs/javascripts/mermaid-init.js
(function () {
  function isDarkMode() {
    return (
      document.body.getAttribute("data-md-color-scheme") === "slate" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function cssVar(name, fallback) {
    const v = getComputedStyle(document.body).getPropertyValue(name).trim();
    return v || fallback;
  }

  function renderMermaid() {
    if (!window.mermaid) return;

    const dark = isDarkMode();

    // Pull colors from Material (falls back safely)
    const bg = cssVar("--md-default-bg-color", dark ? "#0b1220" : "#ffffff");
    const fg = cssVar("--md-default-fg-color", dark ? "#e5e7eb" : "#111827");
    const fgLight = cssVar(
      "--md-default-fg-color--light",
      dark ? "rgba(226,232,240,.45)" : "rgba(15,23,42,.35)"
    );

    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base", // gives you consistent control via themeVariables
      themeVariables: {
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        fontSize: "13px",

        // Make diagram match the page
        background: "transparent",
        mainBkg: "transparent",

        primaryColor: bg,
        primaryTextColor: fg,
        primaryBorderColor: fgLight,

        lineColor: fgLight,
        textColor: fg,

        // Group/cluster styling (if you use subgraphs later)
        clusterBkg: dark ? "rgba(148,163,184,.08)" : "rgba(148,163,184,.10)",
        clusterBorder: fgLight,
      },

      flowchart: {
        curve: "linear",      // crisper than basis
        nodeSpacing: 70,      // more breathing room
        rankSpacing: 70,
        padding: 12,
      },
    });

    // Re-hydrate Mermaid blocks (important for rerenders)
    document.querySelectorAll(".mermaid").forEach((el) => {
      const code = el.textContent;
      el.removeAttribute("data-processed");
      el.innerHTML = code;
    });

    window.mermaid.run({ querySelector: ".mermaid" });
  }

  // Initial load
  document.addEventListener("DOMContentLoaded", renderMermaid);

  // MkDocs Material instant navigation
  document.addEventListener("document$", renderMermaid);

  // Re-render after palette toggle (light/dark)
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-md-component='palette']")) {
      setTimeout(renderMermaid, 60);
    }
  });
})();
