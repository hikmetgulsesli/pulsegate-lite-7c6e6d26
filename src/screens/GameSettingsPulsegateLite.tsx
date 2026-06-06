// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PulseGate Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, Settings, Volume2 } from "lucide-react";


export type GameSettingsPulsegateLiteActionId = "settings-1" | "pause-2" | "settings-3" | "act-save-preferences-4" | "act-return-to-gameplay-5" | "privacy-prot-1" | "data-encrypt-2";

export interface GameSettingsPulsegateLiteProps {
  actions?: Partial<Record<GameSettingsPulsegateLiteActionId, () => void>>;

}

export function GameSettingsPulsegateLite({ actions }: GameSettingsPulsegateLiteProps) {
  return (
    <>
      {/* Background Gameplay Image (Blurred) */}
      <div className="absolute inset-0 z-0 bg-cover bg-center filter blur-xl opacity-40" data-alt="A dynamic, high-speed neon cyberpunk cityscape viewed from the perspective of an advanced racing cockpit. The scene is bathed in intense cyan, magenta, and lime-green glowing lights against a deep black void background. The aesthetics reflect a digital, aggressive, high-energy arcade racing environment with light trails streaming past to indicate extreme velocity." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7p4HAjYYYq4-_z0x8JFyBuNwpadTkCApkjsYXQZKGp_hQe4tvRfqV0FcSC5IjEly8t5LpkZEyZ2s_8nuFXXUf_k-wA9cnBz4zW6BRi2xln2WIlS0Jt7BX5c4h9_ACqy7fo3EP1uOmfkZW3msIj1aOjDF8Fhw0ZrqITznyK9jHu0Bqn9QXI0YKq8YWiFFeC0xB0KFpxBcg6d_PgXINcRh1H0icC13eHgBjOVPyOqGb05zOv_8e3SMJxU-NTCXSv5G9hxDYXcS0fyU')"}}></div>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-hud-margin py-unit bg-transparent flat no shadows hidden md:flex">
      <div className="font-display-lg text-display-lg font-black text-primary drop-shadow-[0_0_10px_rgba(0,219,231,0.8)]">
                  PULSEGATE_LITE
              </div>
      <div className="flex gap-gutter items-center font-label-caps text-label-caps">
      {/* Settings is Active */}
      <button className="text-primary font-bold scale-95 transition-transform duration-150 flex items-center gap-2" type="button" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      SETTINGS
                  </button>
      <button className="text-on-surface-variant hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,219,231,0.6)] scale-95 transition-transform duration-150 flex items-center gap-2" type="button" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause aria-hidden={true} focusable="false" />
                      PAUSE
                  </button>
      </div>
      </header>
      {/* Mobile TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-hud-margin py-unit bg-transparent flat no shadows md:hidden">
      <div className="font-display-lg-mobile text-display-lg-mobile font-black text-primary drop-shadow-[0_0_10px_rgba(0,219,231,0.8)]">
                  PULSEGATE_LITE
              </div>
      <div className="flex gap-gutter items-center font-label-caps text-label-caps">
      <button className="text-primary font-bold scale-95 transition-transform duration-150" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Settings Panel (Centered Glassmorphic Box) */}
      <main className="relative z-10 w-full max-w-2xl bg-surface-container-lowest/80 backdrop-blur-[12px] border border-primary/20 rounded-lg p-panel-padding shadow-[0_0_40px_rgba(0,219,231,0.1)] flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-outline-variant/50 pb-4">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary tracking-wider uppercase drop-shadow-[0_0_8px_rgba(0,219,231,0.5)]">System Override</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">CONFIGURE GAMEPLAY PARAMETERS</p>
      </div>
      <div className="font-hud-metric text-hud-metric text-tertiary-fixed-dim bg-tertiary-fixed-dim/10 px-3 py-1 rounded border border-tertiary-fixed-dim/30">
                      SYS_VER 1.0.2
                  </div>
      </div>
      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Left Column: Sliders */}
      <div className="flex flex-col gap-6">
      {/* Difficulty Slider */}
      <div className="flex flex-col gap-2">
      <div className="flex justify-between font-label-caps text-label-caps">
      <label className="text-on-surface uppercase">DIFFICULTY</label>
      <span className="text-primary-fixed-dim" id="diff-val">STANDARD</span>
      </div>
      <input className="w-full appearance-none bg-transparent" id="difficulty-slider" max="3" min="1" type="range" defaultValue="2" />
      <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant text-[10px]">
      <span>NOVICE</span>
      <span>OVERLOAD</span>
      </div>
      </div>
      {/* Sound Volume */}
      <div className="flex flex-col gap-2">
      <div className="flex justify-between font-label-caps text-label-caps">
      <label className="text-on-surface uppercase flex items-center gap-2">
      <Volume2 className="text-[16px]" aria-hidden={true} focusable="false" />
                                  MASTER VOLUME
                              </label>
      <span className="text-primary-fixed-dim" id="vol-val">80%</span>
      </div>
      <input className="w-full appearance-none bg-transparent" id="volume-slider" max="100" min="0" type="range" defaultValue="80" />
      {/* Energy Bar Style visual representation */}
      <div className="h-1 bg-surface-container-high rounded-full overflow-hidden mt-1">
      <div className="h-full bg-primary-fixed-dim shadow-[0_0_8px_rgba(0,219,231,0.8)]" id="vol-bar" style={{width: "80%"}}></div>
      </div>
      </div>
      </div>
      {/* Right Column: Toggles & Help */}
      <div className="flex flex-col gap-6 bg-surface-container-high/30 p-4 rounded border border-outline-variant/30">
      {/* Speed Toggle */}
      <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface uppercase">HYPER-SPEED</span>
      <span className="text-xs text-on-surface-variant mt-1">ENABLE 2X VELOCITY MULTIPLIER</span>
      </div>
      {/* Custom Neon Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={true} className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-outline after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-container shadow-[0_0_10px_rgba(255,36,228,0.5)]"></div>
      </label>
      </div>
      {/* Input Help */}
      <div className="flex flex-col gap-3 pt-2">
      <h3 className="font-label-caps text-label-caps text-primary uppercase">INPUT SCHEMATICS</h3>
      <div className="flex justify-center gap-2 mt-2">
      <div className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-hud-metric text-hud-metric text-on-surface bg-surface-container-highest/50 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">W</div>
      <div className="flex gap-1">
      <div className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-hud-metric text-hud-metric text-on-surface bg-surface-container-highest/50 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">A</div>
      <div className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-hud-metric text-hud-metric text-on-surface bg-surface-container-highest/50 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">S</div>
      <div className="w-10 h-10 border border-outline-variant rounded flex items-center justify-center font-hud-metric text-hud-metric text-on-surface bg-surface-container-highest/50 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">D</div>
      </div>
      </div>
      </div>
      <div className="text-center font-label-caps text-label-caps text-on-surface-variant mt-2">STEER / ACCELERATE</div>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 border-t border-outline-variant/50 pt-6">
      <button className="flex-1 bg-transparent border-2 border-primary text-primary font-label-caps text-label-caps px-6 py-4 uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-200 shadow-[0_0_15px_rgba(0,219,231,0.3)] hover:shadow-[0_0_25px_rgba(0,219,231,0.8)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="act-save-preferences-4" onClick={actions?.["act-save-preferences-4"]}>
                      ACT_SAVE_PREFERENCES
                  </button>
      <button className="flex-1 bg-surface-container-highest/50 border border-outline-variant text-on-surface font-label-caps text-label-caps px-6 py-4 uppercase tracking-widest hover:bg-surface-container-high hover:border-on-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-outline-variant focus:ring-offset-2 focus:ring-offset-surface" type="button" data-action-id="act-return-to-gameplay-5" onClick={actions?.["act-return-to-gameplay-5"]}>
                      ACT_RETURN_TO_GAMEPLAY
                  </button>
      </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-0 w-full flex justify-between px-hud-margin py-unit opacity-50 hover:opacity-100 transition-opacity z-50 bg-transparent flat">
      <div className="text-on-surface-variant font-label-caps text-label-caps">
                  © 2024 NEON_ARCADE_SYSTEMS
              </div>
      <div className="flex gap-gutter text-on-surface-variant font-label-caps text-label-caps">
      <a className="hover:text-primary transition-colors" href="#" data-action-id="privacy-prot-1" onClick={(event) => { event.preventDefault(); actions?.["privacy-prot-1"]?.(); }}>PRIVACY_PROT</a>
      <a className="hover:text-primary transition-colors" href="#" data-action-id="data-encrypt-2" onClick={(event) => { event.preventDefault(); actions?.["data-encrypt-2"]?.(); }}>DATA_ENCRYPT</a>
      </div>
      </footer>
      
    </>
  );
}
