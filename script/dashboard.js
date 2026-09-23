const dashboardLayout = document.querySelector(".dashboard-layout");
const sidebarToggle = document.querySelector("#sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  const isCollapsed = dashboardLayout.classList.toggle("sidebar-collapsed");
  document.body.classList.toggle("sidebar-collapsed", isCollapsed);

  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggle.setAttribute(
    "aria-label",
    isCollapsed ? "Show sidebar" : "Hide sidebar",
  );
});