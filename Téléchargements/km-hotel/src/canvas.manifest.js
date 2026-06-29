export const manifest = {
  screens: {
    scr_mvdv2e: { name: "Accueil", route: "/#home", position: { "x": 160, "y": 220 } },
    scr_s0767d: { name: "À Propos", route: "/#about", position: { "x": 1560, "y": 220 } },
    scr_jrmc1l: { name: "Services", route: "/#services", position: { "x": 2960, "y": 220 } },
    scr_xr05a7: { name: "Chambres", route: "/#rooms", position: { "x": 4360, "y": 220 } },
    scr_r5oiex: { name: "Restaurant & Bar", route: "/#dining", position: { "x": 5760, "y": 220 } },
    scr_jtiz6o: { name: "Contact", route: "/#contact", position: { "x": 7160, "y": 220 } }
  },
  sections: {
    sec_kopc6y: { name: "Website Navigation", x: 0, y: 0, width: 8520, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_kopc6y", children: [
    { kind: "screen", id: "scr_mvdv2e" },
    { kind: "screen", id: "scr_s0767d" },
    { kind: "screen", id: "scr_jrmc1l" },
    { kind: "screen", id: "scr_xr05a7" },
    { kind: "screen", id: "scr_r5oiex" },
    { kind: "screen", id: "scr_jtiz6o" }]
  }]

};