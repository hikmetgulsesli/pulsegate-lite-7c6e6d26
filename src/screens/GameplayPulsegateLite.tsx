// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - PulseGate Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, Play, RefreshCw, Settings, Trophy } from "lucide-react";


export type GameplayPulsegateLiteActionId = "settings-1" | "pause-2" | "upgrade-core-3" | "start-game-4" | "resume-5" | "abort-6" | "start-1" | "restart-2" | "leaderboard-3" | "settings-4" | "privacy-prot-5" | "data-encrypt-6";

export interface GameplayPulsegateLiteProps {
  actions?: Partial<Record<GameplayPulsegateLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayPulsegateLite({ actions, runtime }: GameplayPulsegateLiteProps) {
  void runtime;
  return (
    <>
      {/* TopAppBar Shell (Hidden nav on focused gameplay canvas) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-hud-margin py-unit bg-transparent flat no shadows scale-95 transition-transform duration-150">
      <div className="font-display-lg text-display-lg font-black text-primary drop-shadow-[0_0_10px_rgba(0,219,231,0.8)]">
                  PULSEGATE_LITE
              </div>
      <div className="flex gap-4">
      <button aria-label="settings" className="text-primary hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,219,231,0.6)] transition-colors p-2" data-icon="settings" type="button" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings className="font-hud-metric text-hud-metric" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="pause" className="text-primary hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,219,231,0.6)] transition-colors p-2" data-icon="pause" type="button" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} className="font-hud-metric text-hud-metric" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on top-level destination as per rules, assuming Gameplay is top-level but isolated) */}
      <nav className="fixed left-0 top-0 h-full z-40 flex flex-col hidden md:flex w-64 border-r border-primary/20 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
      <div className="p-panel-padding border-b border-primary/20">
      <div className="font-display-lg text-display-lg text-primary">PULSE_OS</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-2 opacity-50">SYS_VER 1.0.2</div>
      </div>
      <div className="flex flex-col flex-grow py-4 gap-2">
      <a className="text-primary border-l-4 border-primary bg-primary/10 px-4 py-3 font-hud-metric text-hud-metric flex items-center gap-3 active:scale-98 duration-100" href="#" data-action-id="start-1" onClick={(event) => { event.preventDefault(); actions?.["start-1"]?.(); }}>
      <Play aria-hidden={true} focusable="false" />
                        START
                    </a>
      <a className="text-on-surface-variant hover:text-on-surface px-4 py-3 hover:bg-primary/5 transition-colors font-hud-metric text-hud-metric flex items-center gap-3 active:scale-98 duration-100" href="#" data-action-id="restart-2" onClick={(event) => { event.preventDefault(); actions?.["restart-2"]?.(); }}>
      <RefreshCw aria-hidden={true} focusable="false" />
                        RESTART
                    </a>
      <a className="text-on-surface-variant hover:text-on-surface px-4 py-3 hover:bg-primary/5 transition-colors font-hud-metric text-hud-metric flex items-center gap-3 active:scale-98 duration-100" href="#" data-action-id="leaderboard-3" onClick={(event) => { event.preventDefault(); actions?.["leaderboard-3"]?.(); }}>
      <Trophy aria-hidden={true} focusable="false" />
                        LEADERBOARD
                    </a>
      <a className="text-on-surface-variant hover:text-on-surface px-4 py-3 hover:bg-primary/5 transition-colors font-hud-metric text-hud-metric flex items-center gap-3 active:scale-98 duration-100" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                        SETTINGS
                    </a>
      </div>
      <div className="p-panel-padding border-t border-primary/20 mt-auto">
      <button className="w-full btn-neon font-label-caps text-label-caps py-3 uppercase tracking-widest text-primary" type="button" data-action-id="upgrade-core-3" onClick={actions?.["upgrade-core-3"]}>UPGRADE_CORE</button>
      </div>
      </nav>
      {/* Gameplay Canvas */}
      <main className="flex-grow relative z-10 overflow-hidden md:ml-64 flex items-center justify-center">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
      <div className="absolute bottom-0 w-full h-[819px] neon-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-10"></div>
      <div className="particles" id="particle-container"></div>
      </div>
      {/* Central Pulse Trail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-4 h-32 rounded-full bg-primary pulse-trail opacity-80"></div>
      {/* Gameplay HUD Elements */}
      <div className="absolute top-safe-area left-safe-area z-30 flex flex-col gap-4">
      <div className="glass-panel p-3 rounded-lg min-w-[200px]">
      <div className="font-label-caps text-label-caps text-primary/70 mb-1">LEVEL</div>
      <div className="font-hud-metric text-hud-metric text-primary hud-text">04</div>
      </div>
      <div className="glass-panel p-3 rounded-lg min-w-[200px]">
      <div className="font-label-caps text-label-caps text-primary/70 mb-2">ENERGY</div>
      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full w-3/4 bg-primary shadow-[0_0_10px_#00dbe7]"></div>
      </div>
      </div>
      </div>
      <div className="absolute top-safe-area right-safe-area z-30 flex flex-col gap-4 items-end">
      <div className="glass-panel p-3 rounded-lg min-w-[200px] text-right">
      <div className="font-label-caps text-label-caps text-tertiary-fixed-dim/70 mb-1">SCORE</div>
      <div className="font-hud-metric text-hud-metric text-tertiary-fixed-dim hud-text">014_892</div>
      </div>
      <div className="glass-panel p-3 rounded-lg min-w-[200px] text-right opacity-70">
      <div className="font-label-caps text-label-caps text-tertiary-fixed-dim/50 mb-1">HIGH SCORE</div>
      <div className="font-hud-metric text-hud-metric text-tertiary-fixed-dim hud-text">099_999</div>
      </div>
      </div>
      {/* Initial Start Screen Overlay (Centered) */}
      <div className="absolute z-40 flex flex-col items-center justify-center pointer-events-none">
      <button className="btn-neon font-hud-metric text-hud-metric text-primary px-12 py-4 uppercase tracking-widest pointer-events-auto backdrop-blur-md bg-surface-container-lowest/40" type="button" data-action-id="start-game-4" onClick={actions?.["start-game-4"]}>
                      START GAME
                  </button>
      <div className="font-label-caps text-label-caps text-primary/50 mt-4 tracking-[0.2em] pointer-events-auto">PRESS ANY KEY TO IGNITE</div>
      </div>
      {/* Pause Overlay (Hidden by default, shown for demonstration structure) */}
      {/* <div className="absolute inset-0 z-50 glass-panel flex items-center justify-center hidden">
                   <div className="text-center">
                       <div className="font-display-lg text-display-lg text-primary mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(0,219,231,0.8)]">SYSTEM_PAUSED</div>
                       <div className="flex gap-6 justify-center">
                           <button className="btn-neon font-hud-metric text-hud-metric text-primary px-8 py-3" type="button" data-action-id="resume-5" onClick={actions?.["resume-5"]}>RESUME</button>
                           <button className="border border-outline-variant text-on-surface-variant hover:text-on-surface px-8 py-3 font-hud-metric text-hud-metric transition-colors backdrop-blur-md" type="button" data-action-id="abort-6" onClick={actions?.["abort-6"]}>ABORT</button>
                       </div>
                   </div>
              </div> */}
      </main>
      {/* Footer Shell */}
      <footer className="fixed bottom-0 w-full flex justify-between px-hud-margin py-unit opacity-50 hover:opacity-100 transition-opacity bg-transparent flat z-50 md:ml-64 md:w-[calc(100%-16rem)]">
      <div className="font-label-caps text-label-caps text-on-surface-variant">© 2024 NEON_ARCADE_SYSTEMS</div>
      <div className="flex gap-4 font-label-caps text-label-caps">
      <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="privacy-prot-5" onClick={(event) => { event.preventDefault(); actions?.["privacy-prot-5"]?.(); }}>PRIVACY_PROT</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="data-encrypt-6" onClick={(event) => { event.preventDefault(); actions?.["data-encrypt-6"]?.(); }}>DATA_ENCRYPT</a>
      </div>
      </footer>
      
    </>
  );
}
